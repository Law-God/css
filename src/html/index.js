import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
import "../css/bundle.less";

//page
import Header from './page/header/Header';
import Tv from './page/main/tv/Tv';
import Role from './page/main/role/Role';
import Footer from './page/footer/Footer';

class Application extends Component{
	render(){
		return(
			<div className="flex-container-body">
				<Header/>
				<Tv/>
				<Footer/>
			</div>
		);
	}
}

render(
	(
		<Router history={hashHistory}>
	    	<Route path="/" component={Application}>
	    		<Route path="/tv" component={Tv}/>
	    		<Route path="/role" component={Role}/>
	    	</Route>
	    	
	    </Router>
    ),document.getElementById("app")
 );

