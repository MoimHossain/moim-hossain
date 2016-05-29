
import React from 'react';
import {Component} from 'react';
import Photo from '../comps/photo';
import Banner from '../comps/banner';

export default class Photography extends Component {
	constructor(props) {
    	super(props);


  	}

    componentDidMount() {
      var scope = this;
      $.get('http://rss2json.com/api.json?rss_url=https://500px.com/moimHossain/rss', function (argument) {        
        scope.setState({
          rss: argument
        });
      });      
    }

  	render() {
        var items = this.state && this.state.rss && this.state.rss.items ? this.state.rss.items : [];        
  	    return (
          <div>
              <Banner caption="Enjoy!"></Banner>
              <div className="ui vertical stripe segment">
                <div className="ui middle aligned stackable grid container">

                    <div className="ui link cards">
                      {
                        items.map((photo, index)=> {
                          return (
                            <Photo key={index} photo={photo}></Photo>
                            );
                        })
                      }
                    </div>

                </div>
              </div>
          </div>
  	    	);
  	}
};
