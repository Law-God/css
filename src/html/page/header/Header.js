import React,{ Component } from 'react';
import { Link } from 'react-router';
import './header.less';

const logoImg = require("./images/logo.png");

export default class Header extends Component{
	render(){
		return (
			<div className="flex-container nav-head">
				<div className="nav-item1"><a href="#" ><img src={logoImg}/></a></div>
				<div className="nav-item2"><a href="#" >首页</a><Link to="/tv">剧集</Link><Link to="/role">角色</Link></div>
				<div className="nav-item3"><a href="#" >登录</a><a href="#" >注册</a></div>
			</div>
		);
	}
}