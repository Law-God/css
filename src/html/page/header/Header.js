import React,{ Component } from 'react';
import './header.less';

const logoImg = require("./images/logo.png");

export default class Header extends Component{
	render(){
		return (
			<div className="flex-container nav-head">
				<div className="nav-item1"><a href="#" ><img src={logoImg}/></a></div>
				<div className="nav-item2"><a href="#" >首页</a><a href="#" >剧集</a><a href="#" >角色</a></div>
				<div className="nav-item3"><a href="#" >登录</a><a href="#" >注册</a></div>
			</div>
		);
	}
}