import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Drawer } from 'antd-mobile';

import { render } from 'react-dom';

class Toptags extends Component {
	render() {
		return (			
            <header>
                <h1 onClick={this.onOpenChange}>
                    <div className="h1-left">
                        <i className="iconfont">&#xe655;</i>
                    </div>
                    <div className="h1-right">卖座电影</div>
                </h1>
                <div className="header-right">
                    <a href="#" className="left-a">
                        <span>深圳</span>
                        <i className="iconfont">&#xe600;</i>
                    </a>
                    <a href="#" className="right-a"><i className="iconfont">&#xe610;</i></a>
                </div>
            </header>            
		);
	}

	
}
var Toptag=connect(
	function(state,ownProps){
		return {
			
		}
	}
)(Toptags)
export default Toptag;