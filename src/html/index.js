import React from 'react';
import ReactDOM from 'react-dom';
import "../css/bundle.less";

const logoImg = require("../css/images/logo.png");
var NavHead = React.createClass({
	render : function(){
		return  <nav className="flex-container nav-head">
					<div className="flex-item-row1"><a href="#" ><img src={logoImg}/></a></div>
					<div className="flex-item-row2"><a href="#" >首页</a><a href="#" >剧集</a><a href="#" >角色</a></div>
					<div className="flex-item-row3"><a href="#" >登录</a><a href="#" >注册</a></div>
				</nav>
	}
});

ReactDOM.render(
	<NavHead />,
	document.getElementById("nav-head")
);

const xmjgImg = require("../css/images/xmjf.jpg");
const gyzbImg = require("../css/images/gyzb.jpg");
const wjctImg = require("../css/images/wjct.jpg");
const jllyImg = require("../css/images/jlly.jpg");

var Main = React.createClass({
	render : function(){
		return <section className="main">
					<div className="flex-item-row">
						<img src={xmjgImg}/>
						<dl>
							<dt>霹雳天命之仙魔鏖锋</dt>
							<dd>
								天命苦劫修罗海，三光尽现仙门在；<br/>
								仙魔鏖锋战云开，邪心魔佛见如来。
							</dd>
						</dl>
					</div>
					<div className="flex-item-row">
						<img src={gyzbImg}/>
						<dl>
							<dt>霹雳狼烟之古原争霸</dt>
							<dd>
								单锋破天枪贯地，剑争日辉弓坠月；<br/>
								狩宇奇风气吞雷，术水阴阳刀电夜。<br/>
								古原争霸，八雄峰会；<br/>
								山海奇观，谁主生灭。
							</dd>
						</dl>
					</div>
					<div className="flex-item-row">
						<img src={wjctImg}/>
						<dl>
							<dt>霹雳狼烟之万堺尘涛</dt>
							<dd>
								千古尘涛江湖路，太上府下非道悟。<br/>
								九州锋镝何人解，九轮征伐几时无。<br/>
								万堺同修会朝城，万魔惊座镇幽都。<br/>
								刀剑忘机希奇叹，武林再开英雄途。
							</dd>
						</dl>
					</div>
					<div className="flex-item-row">
						<p><img src={jllyImg}/></p>
						<div>
							<dl>
								<dt>霹雳狼烟之九轮燎原</dt>
								<dd>
									千日失忆，还真忘，莲生解锋镝。<br/>
									一线生数，史迁笔，清荷新纪元。<br/>
									百器争锋，封剑主，奇局定唯一。<br/>
									九轮降世，天譩裁，神州尽燎原。
								</dd>
							</dl>
						</div>
					</div>
				</section>
	}
})

ReactDOM.render(
	<Main />,
	document.getElementById("main")
);


var Footer = React.createClass({
	render : function(){
		return <footer className="footer">
					<div className="flex-item-footer1">
						<div className="flex-item-footer1-1"><a href="#">网站首页</a><a href="#">联系我们</a><a href="#">常见问题</a><a href="#">意见反馈</a><a href="#">友情链接</a></div>
						<div className="flex-item-footer1-2">Copyright © 2016 phantom.com All Rights Reserved</div>		
					</div>
					<div className="flex-item-footer2">
						<a href="#" className="follous follous-weixin"><i className="follous follous-weixin-extend"></i></a>
						<a href="#" className="follous follous-weibo"></a>
						<a href="#" className="follous follous-qzone"></a>
					</div>
				</footer>
	}
});

ReactDOM.render(
	<Footer />,
	document.getElementById("footer")
);
