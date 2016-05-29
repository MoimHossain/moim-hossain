
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Tabs from './supports/tabs';
import Home from './pages/home';
import Blog from './pages/blog';
import Photography from './pages/photography';
import Contact from './pages/contact';

ReactDOM.render(
  	<Router history={hashHistory}>
    	<Route path="/" component={Tabs}>    		
    		<Route path="/home" component={Home}/>
    		<Route path="/blog" component={Blog}/>
    		<Route path="/photography" component={Photography}/>
    		<Route path="/contact" component={Contact}/>
    	</Route>
  	</Router>, 
  	document.getElementById('main'));



