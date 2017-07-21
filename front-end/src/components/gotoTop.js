import React, { Component } from 'react';
import { connect } from 'react-redux';
import {render} from 'react-dom';
import $ from 'jquery';
class GotoTops extends Component {
	render() {
		return (			
            <div className="top-icon" style={{display:"block"}} onClick={this.changeTop.bind(this)}>
                <i className="iconfont">&#xe6f0;</i>
            </div>            
		);
	}
    changeTop(){
        $('.am-drawer-content').animate({
				scrollTop:0
			},500);
        
    }
	
}




var GotoTop=connect(
	function(state,ownProps){
		return {
			
		}
	}
)(GotoTops)
export default GotoTop;