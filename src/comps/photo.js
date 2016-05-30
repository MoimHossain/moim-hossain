
import React from 'react';
import {Component} from 'react';
import Html from './html';



export default class Photo extends Component {
	constructor(props) {
    	super(props);
  	}

    getJson() {
        var dom = $(this.props.photo.content).replaceAll("<br>", '');
        var caption = dom[4].innerText || '';
        var photo = {
          url: dom[0].href,
          thumbUrl: (dom.find('img').attr('src')),
          title: caption.substr(0, caption.indexOf('by'))
        };        
        return photo;
    }

    onClick() {
      console.log(this.props.photo.url)
        window.open(this.getJson().url);
    }
    
  	render() {
        var photo = this.getJson();        
  	    return (
              <div className="card" onClick={this.onClick.bind(this)}>
                <div className="image">
                  <img className="thumbImage" src={photo.thumbUrl}></img>
                </div>
                <div className="content">
                  <div className="header">{photo.title}</div>
                  <div className="meta">
                    <a>{this.props.pubDate}</a>
                  </div>
                </div>

              </div>
  	    	);
  	}
};
