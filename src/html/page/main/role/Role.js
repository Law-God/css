import React, { Component } from 'react';
import './role.less';

const shzImg = require("./images/shz.jpg");
const yysImg = require("./images/yys.jpg");
const yxcImg = require("./images/yxc.jpg");
const qjxImg = require("./images/qjx.jpg");

export default class Role extends Component{
	render(){
		return(
				<div className="main">
					<div className="flex-item-row">
						<img src={shzImg}/>
						<dl>
							<dt><h3><span className="cover"></span>素还真</h3></dt>
							<dd>
								半神半圣亦半仙，全儒全道是全贤，<br/>
								脑中真书藏万卷，掌握文武半边天。
							</dd>
						</dl>
					</div>
					<div className="flex-item-row">
						<img src={yysImg}/>
						<dl>
							<dt><h3><span className="cover"></span>一页书</h3></dt>
							<dd>
								世事如棋，乾坤莫测，笑尽英雄啊！<br/>
								六道同坠，魔劫万千，引渡如来。
							</dd>
						</dl>
					</div>
					<div className="flex-item-row">
						<img src={yxcImg}/>
						<dl>
							<dt><h3><span className="cover"></span>叶小钗</h3></dt>
							<dd>
								一使刀狂越九霄，长挥剑痴踏沧浪。<br/>
								断刃重续心无悔，已许江湖是故乡。
							</dd>
						</dl>
					</div>
					<div className="flex-item-row">
						<p><img src={qjxImg}/></p>
						<div>
							<dl>
								<dt><h3><span className="cover"></span>秦假仙</h3></dt>
								<dd>
									真仙非假仙，根基远无边。<br/>
									闲闲谈文武，独占一片天。
								</dd>
							</dl>
						</div>
					</div>
				</div>
		);
	}
}