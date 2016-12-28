import React,{ Component } from 'react';
import { Link } from 'react-router';
import './tv.less';

const xmjgImg = require("./images/xmjf.jpg");
const gyzbImg = require("./images/gyzb.jpg");
const wjctImg = require("./images/wjct.jpg");
const jllyImg = require("./images/jlly.jpg");

export default class Tv extends Component{
	render(){
		const Elements = (
			<div className="main">
				<div className="flex-item-row">
					<Link to="/tv/detail"><img src={xmjgImg}/></Link>
					<dl>
						<dt><h3><span className="cover"></span>霹雳天命之仙魔鏖锋</h3></dt>
						<dd>
							天命苦劫修罗海，三光尽现仙门在；<br/>
							仙魔鏖锋战云开，邪心魔佛见如来。
						</dd>
					</dl>
				</div>
				<div className="flex-item-row">
					<img src={gyzbImg}/>
					<dl>
						<dt><h3><span className="cover"></span>霹雳狼烟之古原争霸</h3></dt>
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
						<dt><h3><span className="cover"></span>霹雳狼烟之万堺尘涛</h3></dt>
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
							<dt><h3><span className="cover"></span>霹雳狼烟之九轮燎原</h3></dt>
							<dd>
								千日失忆，还真忘，莲生解锋镝。<br/>
								一线生数，史迁笔，清荷新纪元。<br/>
								百器争锋，封剑主，奇局定唯一。<br/>
								九轮降世，天譩裁，神州尽燎原。
							</dd>
						</dl>
					</div>
				</div>
			</div>	
		)
		return(
			<div>
				{ this.props.children || Elements }
			</div>
		);
	}
}