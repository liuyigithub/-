import React, { Component } from 'react';

import { connect } from 'react-redux';
import {render} from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
class Hitbtns extends Component {
	render() {
		return (
			
                <Link to={"/movie/now-play"}><button className="hit-btn">更多热映电影</button></Link>
            
		);
	}

	
}
var Hitbtn=connect(
	function(state,ownProps){
		return {
			
		}
	}
)(Hitbtns)
export default Hitbtn;