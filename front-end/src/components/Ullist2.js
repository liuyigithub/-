import React, { Component } from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import Comingbtn from './comingbtn.js';
class Ullists extends Component {
    render() {
        return (
            <div className="coming-movies">                                    
                <div className="title">
                    <div className="title-name">即将上映</div>
                </div>
                <ul className="coming-list">
                    {   this.props.todocoming.map(function(item,index){
                            {/* console.log(item) */}
                            return <li key={index}>
                                        <Link to={"/filmDetail/"+item.id}>
                                            <div className="coming-pic">
                                                <div className="coming-pic-sk"><img src={item.cover.origin} alt=""/></div>
                                            </div>
                                            <div className="coming-name">
                                                <div>{item.name}</div>
                                                <div className="time-coming">{(new Date(item.premiereAt).getMonth()+1)+'月'+(new Date(item.premiereAt).getDate()+'日上映')}</div>
                                            </div>
                                        </Link>                                        
                                    </li> 
                        })                                       
                    }                    
                </ul>
                <Comingbtn></Comingbtn>
            </div>
            
        )
    }
    componentDidMount() {
        var that=this;
        $.get('http://localhost:8080/comingmovies', function (res) {

            var datasArr=JSON.parse(res).data.films;
            // console.log(datasArr)
            that.props.changeComing(datasArr);   
        })
        
    }
    
}

var Ullist2 = connect(
    function (state, ownProps) {
        return {
             todocoming:state.comingMovies
        }
    },
    function(dispatch, ownProps) {
		return {
			changeComing: function(moviesArr) {
				dispatch({
					type:'CHANGE_COMINGMOVIES',
					moviesArr:moviesArr
				})
			}		
		}
	}
)(Ullists);

export default Ullist2;