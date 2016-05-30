
import React from 'react';
import {Component} from 'react';
import TabTitle from './tabTitle';
import TopMenu from '../comps/topMenu';
import TopMenuMobile from '../comps/topMenuMobile';
import Footer from '../comps/footer';
import utils from './utils';

class Tabs extends Component {
	constructor(props) {
    	super(props);
    	$(window).resize(this.jqUpdateSize.bind(this));
    	this.routes = [
    		{ route: 'home' , title: 'Home'}, 
    		{ route: 'blog' , title: 'Blog'}, 
    		{ route: 'photography' , title: 'Photography'}];
    	this.state = { activeIndex: 0 };
  	}

    jqUpdateSize() {        
        var width = $(window).width();        
        this.setState({
            mobile: (width < 700)
        });
    }    

	onClick(tabIndex, routePath) {
        console.log(routePath + ' ' + tabIndex)
		this.setState({activeIndex: tabIndex});
		location.hash = routePath;
	}

    componentDidMount() {
    	var scope = this, hash = location.hash + '', found = false;
    	this.routes.forEach((r, index)=> {
    		if(hash.indexOf(r.route) > 0) {
    			found = true;
    			scope.onClick(index, '/'+ r.route);
    			return false;
    		}
    	});
    	if(found !== true) {
    		scope.onClick(0, '/'+ this.routes[0].route);    		
    	}
        this.jqUpdateSize();
    }

    renderMobileMenu() {        
        if(this.state.mobile) {            
            return (<TopMenuMobile
                onClick={this.onClick.bind(this)}
                activeIndex={this.state.activeIndex} 
                routes={this.routes}>
            </TopMenuMobile>);
        }
        return false;
    }

    render() {
        return (
			<div className="appContainer">
				<TopMenu 
                    onClick={this.onClick.bind(this)}
                    activeIndex={this.state.activeIndex} 
                    routes={this.routes}></TopMenu>
                    {this.renderMobileMenu()}
				<div className="pusher">
					{this.props.children}
				  <Footer></Footer>
				</div>
			</div>
        );
    }
}

export default Tabs;

