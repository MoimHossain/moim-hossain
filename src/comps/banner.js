
import React from 'react';
import {Component} from 'react';

export default class Banner extends Component {
	constructor(props) {
    	super(props);
  	}
    
  	render() {
  	    return (
          <div className="ui  vertical masthead center aligned segment banner">
            <div className="ui text container">
              <h1 className="ui inverted header">
                <br/>                
                <br/>
                <br/>
                {this.props.caption}
                </h1>
            </div>
          </div>
  	    	);
  	}
};
