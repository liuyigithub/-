import React, { Component } from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
class Nowplayings extends Component {    
    render() {
		return (
			<ul className="list-unstyled">
                {
                    this.props.nowFilmlist.map(function(item,index){
                        return <li key={index}>
                                    <Link to={"/filmDetail/"+item.id}>
                                        <div className="film-item">
                                            <div className="movie-pic"><img src={item.poster.thumbnail} alt=""/></div>
                                            <div className="film-desc">
                                                <div className="movie-biaoti">
                                                    <p>{item.name}</p>
                                                    <span>{item.grade}</span>
                                                    <i className="iconfont">&#xe637;</i>
                                                </div>
                                                <div className="movie-jjie">{item.intro}</div>
                                                <div className="movie-yyuan">
                                                    <span className="count">{item.cinemaCount}</span>
                                                    <span className="kuandu">家影院上映</span>
                                                    <span className="count">{item.watchCount}</span>
                                                    <span>人购票</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>                                    
                                </li>
                    })
                     
                }
               
            </ul>
		);
    }
    componentDidMount() {
        var that=this;
        $.get('http://localhost:8080/now-playing', function (res) {

            var dataArrnow=JSON.parse(res).data.films;
            // console.log(dataArrnow)
            that.props.changeNowplay(dataArrnow);   
        })
        
    }

	
}
var Nowplaying=connect(
	function(state,ownProps){
		return {
			nowFilmlist:state.nowPlayfilms
		}
    },
    function(dispatch, ownProps) {
		return {
			changeNowplay: function(nowlistM) {
				dispatch({
					type:'CHANGE_NOWPLAY',
					nowlistM:nowlistM
				})
			}			
		}
	}
)(Nowplayings)
export default Nowplaying;