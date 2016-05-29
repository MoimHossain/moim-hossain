
import React from 'react';
import {Component} from 'react';


class Html extends Component {
	constructor(props) {
    	super(props);
  	}   

  	render() {
        var scope = this;
        function createMarkup() { return {__html: scope.props.html }; };
      
  	    return (
                <div className="article" dangerouslySetInnerHTML={createMarkup()} />
  	    	);
  	}
};

export default Html;
