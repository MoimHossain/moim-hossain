
import React from 'react';
import {Component} from 'react';
import BlogTile from '../comps/blogTile';
import Banner from '../comps/banner';

export default class Blog extends Component {
	constructor(props) {
    	super(props);
      this.blogspot = window.blogspot;      
  	}

  	render() {
  	    return (
          <div>
              <Banner caption="Thanks for reading"></Banner>
              <div className="ui vertical stripe segment">
                <div className="ui middle aligned stackable grid container">

                    <div className="ui link cards">
                      {
                        this.blogspot.feed.entry.map((entry, index)=> {
                          return (
                            <BlogTile key={index} entry={entry}></BlogTile>
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
