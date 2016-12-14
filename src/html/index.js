import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router'
import "../css/bundle.less";

//page
import Header from './page/header/Header';
import Tv from './page/main/tv/Tv';
import Footer from './page/footer/Footer';

class Application extends Component{
	render(){
		return(
			<div id="app" className="flex-container-body">
				<Header/>
				<Tv/>
				<Footer/>
			</div>
		);
	}
}

render((<Application/>),document.body);

