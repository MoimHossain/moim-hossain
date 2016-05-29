
import React from 'react';
import {Component} from 'react';
import Html from './html';

export default class Photo extends Component {
	constructor(props) {
    	super(props);
  	}
    
  	render() {
  	    return (
          <div className="ui">
            <Html html={this.props.photo.content}></Html>
          </div>
  	    	);
  	}
};
