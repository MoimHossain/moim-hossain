
import React from 'react';
import {Component} from 'react';
import Cls from 'classnames';

export default class TopMenu extends Component {
	constructor(props) {
    	super(props);
  	}

    onClick(index) {
      this.props.onClick(index, '/' + this.props.routes[index].route);
    }
    
  	render() {
        let scope = this;

  	    return (
              <div className="ui large top fixed menu">
                <div className="ui container">
                  {
                    scope.props.routes.map((route, index) => {
                        let ClsObj = Cls({ 'item' : true, 'active': scope.props.activeIndex === index});                        
                        if(route.right === true) {
                          return (
                            <div key={index} className="right menu">
                                <a 
                                  className={ClsObj}
                                  onClick={scope.onClick.bind(scope, index)}>{route.title}</a>
                            </div>          
                            );
                        } else {
                          return (
                            <a 
                              key={index} 
                              className={ClsObj}
                              onClick={scope.onClick.bind(scope, index)}
                              >{route.title}</a>
                            );
                        }
                    })
                  }
                </div>
              </div>
  	    	);
  	}
};
