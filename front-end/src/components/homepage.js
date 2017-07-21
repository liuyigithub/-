import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swiperx from './swiper.js';
import Ullist1 from './Ullist1.js';
import Ullist2 from './Ullist2.js';
import GotoTop from './gotoTop.js';
class Homepages extends Component {
	render() {
		return (
			<div className="mian-view">
                <Swiperx></Swiperx>
                <div className="list-movies">						
                    <Ullist1></Ullist1>
                    <Ullist2></Ullist2>						
                </div>
				<GotoTop></GotoTop>
            </div>
		);
	}

	
}
var Homepage=connect(
	function(state,ownProps){
		return {
			
		}
	}
)(Homepages)
export default Homepage;
