import React, { Component } from 'react';

import { connect } from 'react-redux';
import $ from 'jquery';
class FilmDetails extends Component {
    
	render() {
        var url=this.props.todofilms.cover?this.props.todofilms.cover:"";
		return this.props.todofilms?(			
            <div className="film-detail">
                 <div className="film-detail-view">
                    <div className="detail-pic">
                       <img src={url.origin} alt=""/>                        
                    </div>
                    <div className="film-intro">
                        <div className="film-word1">影片简介</div>
                        <div className="film-word2">
                            <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                            <span>{this.props.todofilms.director}</span>
                        </div>
                        <div className="film-word2">
                            
                            <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                            <span>{this.props.todofilms.actors?this.props.todofilms.actors.map(function(item,index){
                                    return item.name+" |"
                                }):""}</span>
                        </div>
                        <div className="film-word2">
                            <span>地区语言：</span>
                            <span>{this.props.todofilms.nation}({this.props.todofilms.language})</span>
                        </div>
                        <div className="film-word2">
                            <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
                            <span>{this.props.todofilms.category}</span>
                        </div>
                        <div className="film-word2">
                            <span>上映日期：</span>
                            <span>{(new Date(this.props.todofilms.premiereAt).getMonth()+1)+"月"+(new Date(this.props.todofilms.premiereAt).getDate()+"日上映")}</span>
                        </div>
                        <div className="film-word3">{this.props.todofilms.synopsis}</div>
                    </div>
                    <div className="operation">
                        <button>立即购票</button>
                    </div>
                </div>                 
            </div>            
		): <div>正在加载</div>
    }
    componentDidMount() {
        var that=this;
        var id = that.props.match.params.id;
        // console.log(id);
        $.get('http://localhost:8080/film-detail?id=' + id, function (res) {
            // console.log(JSON.parse(res));
            var dataObj=JSON.parse(res).data.film;
            // console.log(dataObj);
            that.props.changeFilmDetail(dataObj); 
        //    console.log( that.props.todofilms) 
        })
        
    }

	
}
var FilmDetail=connect(
	function (state, ownProps) {
        return {
            todofilms:state.filmteails
        }
    },
    function(dispatch, ownProps) {
		return {
			changeFilmDetail: function(datafilms) {
				dispatch({
					type:'CHANGE_FILMDETAIL',
					datafilms:datafilms
				})
			}			
		}
	}
)(FilmDetails)
export default FilmDetail;
