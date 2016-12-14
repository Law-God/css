import React,{ Component } from 'react';
import './footer.less';

export default class Footer extends Component{
	render(){
		return(
				<div className="footer">
					<div className="flex-item-footer1">
						<div className="flex-item-footer1-1"><a href="#">网站首页</a><a href="#">联系我们</a><a href="#">常见问题</a><a href="#">意见反馈</a><a href="#">友情链接</a></div>
						<div className="flex-item-footer1-2">Copyright © 2016 phantom.com All Rights Reserved</div>		
					</div>
					<div className="flex-item-footer2">
						<a href="#" className="follous follous-weixin"><i className="follous follous-weixin-extend"></i></a>
						<a href="#" className="follous follous-weibo"></a>
						<a href="#" className="follous follous-qzone"></a>
					</div>
				</div>
		);
	}
}
