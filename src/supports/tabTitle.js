
import React from 'react';
import {Component} from 'react';
import ClassNames from 'classnames';

 export default React.createClass({
  	render: function() {
  		var tabClass = ClassNames({
  			'step': true,
  			'active': this.props.isActive
  		});
        return (<div className={tabClass} onClick={this.props.onClick}>
				    <i className={this.props.iconClass}></i>
				    <div className="content">
				      <div className="title">{this.props.title}</div>
				      <div className="description">{this.props.description}</div>
				    </div>
				</div>);
  	}
});

