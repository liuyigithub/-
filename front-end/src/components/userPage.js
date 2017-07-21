import React, { Component } from 'react';

import { connect } from 'react-redux';
import { render } from 'react-dom';
import { HashRouter as Router, Link } from 'react-router-dom';
class UserPages extends Component {
	render() {
		return (			
            <div className="center-home-view">
                <div className="center-header-wrap">
                    <img src="https://pic.maizuo.com/usr/default/maizuomoren66.jpg" alt="" className="center-pic"/>
                    <div className="center-name">
                        <p>手机用户1536</p>
                        <p className="center-name-id">ID:217321093</p>
                        <p><Link to="/login">退出</Link></p>
                    </div>
                </div>
                <div className="center-nav">
                    <div className="menu-wrapper">
                        <div className="menu-wrapper-tab">
                            <div className="menu-wrapper-left">
                                <i className="iconfont">&#xe608;</i>
                                <span>影票订单</span>
                            </div>
                            <div className="menu-wrapper-right">
                                <span className="count-span">
                                    <b>0</b>
                                    <span>&nbsp;张</span>
                                </span>
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu-wrapper-tab">
                            <div className="menu-wrapper-left">
                                <i className="iconfont iconfont-i1">&#xe608;</i>
                                <span>影票待付订单</span>
                            </div>
                            <div className="menu-wrapper-right">
                                <span className="count-span">
                                    <b>0</b>
                                    <span>&nbsp;张</span>
                                </span>
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu-wrapper-tab">
                            <div className="menu-wrapper-left">
                                <i className="iconfont iconfont-i2">&#xe646;</i>
                                <span>商城订单</span>
                            </div>
                            <div className="menu-wrapper-right">                               
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu-wrapper-tab">
                            <div className="menu-wrapper-left">
                                <i className="iconfont iconfont-i3">&#xe66b;</i>
                                <span>演出订单</span>
                            </div>
                            <div className="menu-wrapper-right">                                
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper sub-margin">
                        <div className="menu-wrapper-tab sub-border">
                            <div className="menu-wrapper-left">
                                <i className="iconfont iconfont-i4">&#xe60a;</i>
                                <span>我的现金券</span>
                            </div>
                            <div className="menu-wrapper-right">
                                <span className="count-span">
                                    <b>0</b>
                                    <span>&nbsp;张</span>
                                </span>
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper sub-margin">
                        <div className="menu-wrapper-tab sub-border">
                            <div className="menu-wrapper-left">
                                <i className="iconfont iconfont-i5">&#xe661;</i>
                                <span>账户余额</span>
                            </div>
                            <div className="menu-wrapper-right">
                                <span className="count-span">
                                    <b>0</b>
                                    <span>&nbsp;张</span>
                                </span>
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper sub-margin">
                        <div className="menu-wrapper-tab">
                            <div className="menu-wrapper-left">
                                <i className="iconfont iconfont-i6">&#xe608;</i>
                                <span>我的卖座卡</span>
                            </div>
                            <div className="menu-wrapper-right">
                                <span className="count-span">
                                    <b>0</b>
                                    <span>&nbsp;张</span>
                                </span>
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu-wrapper-tab">
                            <div className="menu-wrapper-left">
                                <i className="iconfont iconfont-i7">&#xe80a;</i>
                                <span>设置</span>
                            </div>
                            <div className="menu-wrapper-right">
                                <span className="count-span">
                                    <b>0</b>
                                    <span>&nbsp;张</span>
                                </span>
                                <span className="icon-span">
                                    <i className="iconfont">&#xe637;</i>
                                </span>
                            </div>
                        </div>
                    </div>                                                         
                </div>
            </div>            
		);
	}

	
}
var UserPage=connect(
	function(state,ownProps){
		return {
			
		}
	}
)(UserPages)
export default UserPage;