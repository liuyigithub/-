import React, { Component } from 'react';

import {render} from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';

import { connect } from 'react-redux';
import $ from 'jquery';

import Hitbtn from './Hitbtn.js';

class Ullist extends Component {
    render() {
        return (
            <div className="hit-movies">
                <ul className="hit-list">
                    {
                        this.props.todolist.map(function(item,index){
                            {/* console.log(item); */}
                            return <li key={index}>
                                        <Link to={"/filmDetail/"+item.id}>
                                            <div className="list-pic">
                                                <div className="big-img"><img src={item.cover.origin} alt=""/></div>
                                            </div>
                                            <div className="list-intro">
                                                <dl>
                                                    <dt>{item.name}</dt>
                                                    <dd><span>{item.cinemaCount}</span><span>家影院上映</span><span>{item.watchCount}</span><span>人购票</span></dd>
                                                </dl>
                                                <span className="grade">{item.grade}</span>
                                            </div>
                                        </Link>                                                                
                                    </li> 
                        })
                    }
                    
                </ul>
                <Hitbtn></Hitbtn>
            </div>
            
        )
    }
    componentDidMount() {
        var that=this;
        $.get('http://localhost:8080/hitmovies', function (res) {
            // console.log(JSON.parse(res));
            var dataArr=JSON.parse(res).data.films;
            // console.log(dataArr)
            that.props.changeList(dataArr);   
        })
        
    }
}

var Ullist1 = connect(
    function (state, ownProps) {
        return {
            todolist:state.todomovies
        }
    },
    function(dispatch, ownProps) {
		return {
			changeList: function(listmovies) {
				dispatch({
					type:'CHANGE_HITMOVIES',
					listmovies:listmovies
				})
			}			
		}
	}
)(Ullist);

export default Ullist1;