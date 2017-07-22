import React, { Component } from 'react';
import { connect } from 'react-redux';
import {render} from 'react-dom';
import {HashRouter as Router, Route,NavLink} from 'react-router-dom';

import Nowplaying from './nowplaying.js';
import Comingsoon from './comingsoon.js';
import GotoTop from './gotoTop.js';
class Movielists extends Component {
	render() {
		return (
            <Router>
                <div className="mian-movies">
                    <div className="movies-tab">
                        <NavLink activeClassName='z-act' to="/movie/now-play" >正在热映</NavLink>
                        <NavLink activeClassName='z-act' to="/movie/coming-soon" >即将上映</NavLink>
                    </div>
                    <div className="movies-lie">
                        <Route path="/movie/now-play" component={Nowplaying} />
                        <Route path="/movie/coming-soon" component={Comingsoon}/>
                    </div> 
                    <GotoTop></GotoTop>               
                </div>
                
            </Router>
		);
	}
    componentDidMount(){
        this.props.changTitle("卖座电影")
    }
	
}
var Movielist=connect(
	function(state,ownProps){
		return {
			
		}
    },
    function(dispatch,ownProps){
        return {
            changTitle:function(data){
                dispatch({
                    type:"CHANGETITLE",
                    data:data
                })
            }
        }
    }
)(Movielists)
export default Movielist;