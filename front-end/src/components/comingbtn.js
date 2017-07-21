import React, { Component } from 'react';

import { connect } from 'react-redux';
import {render} from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
class Comingbtns extends Component {
	render() {
		return (
			
                <Link to={"/movie/coming-soon"}><button className="coming-btn">更多即将上映电影</button></Link>
            
		);
	}

	
}
var Comingbtn=connect(
	function(state,ownProps){
		return {
			
		}
	}
)(Comingbtns)
export default Comingbtn;