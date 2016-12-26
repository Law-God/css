import React,{ Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './header.less';

const logoImg = require("./images/logo.png");

export default class Header extends Component{
	render(){
		return (
			<div className="flex-container nav-head">
				<div className="nav-item1"><a href="#" ><img src={logoImg}/></a></div>
				<div className="nav-item2"><IndexLink to="/" activeClassName="active">首页</IndexLink><Link to="/tv" activeClassName="active">剧集</Link><Link to="/role" activeClassName="active">角色</Link></div>
				<div className="nav-item3"><a href="#" >登录</a><a href="#" >注册</a></div>
			</div>
		);
	}
}