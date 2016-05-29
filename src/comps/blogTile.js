
import React from 'react';
import {Component} from 'react';
import Html from './html';

export default class BlogTile extends Component {
	constructor(props) {
    	super(props);
  	}

    onClick() {
      var entry = this.props.entry;
      window.open(entry.link[1].href);
    }

    onOpenBlog() {
     var entry = this.props.entry;
      window.open(entry.link[4].href); 
    }
    
  	render() {
        var entry = this.props.entry;        
  	    return (
            <div className="ui stacked segment">            
              <h3 className="header" onClick={this.onOpenBlog.bind(this)}>{entry.title.$t}</h3>
              <div className="ui divider"></div>
              <Html html={entry.content.$t}></Html>              
              <div className="ui divider"></div>
              <div className="ui feed">
                <div className="event">
                  <div className="label">
                    <img className="MoimHossainSmallImage"></img>
                  </div>                  
                  <div className="content">
                    <div className="summary">
                      Authored by
                        <a className="user">&nbsp;&nbsp;Moim Hossain</a> <div className="date">{entry.published.$t}</div>
                    </div>                     
                  </div>
                </div>

                <div className="ui items">
                  <div className="item" onClick={this.onClick.bind(this)}>
                      <div className="extra">
                        <div className="ui right floated ">                          
                            <div className="ui labeled button">
                              <div className="ui button">
                                <i className="heart icon"></i> comments
                              </div>
                              <a className="ui basic label">
                                {entry.link[1].title.split(' ')[0]}
                              </a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>              



              </div>
              
            </div>

  	    	);
  	}
};
