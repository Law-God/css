import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'
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
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

render((
		<Router history={hashHistory}>
	    	<Route path="/" component={Application}>
	    		<IndexRoute component={ Tv} />
	    		<Route path="header" component={Header} />
	    		<Route path="tv" component={Tv}/>
	    		<Route path="role" component={Role}/>
	    		<Route path="footer" component={Footer} />
	    	</Route>
	    </Router>),document.getElementById("app")
 );

