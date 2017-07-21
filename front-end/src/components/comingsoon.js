import React, { Component } from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
class Comingsoons extends Component {


	render() {
		return (
			<ul className="list-unstyled">
				{
					this.props.comingFilmlist.map(function (item, index) {
						{/* console.log(item) */ }
						return <li key={index}>
									<Link to={"/filmDetail/"+item.id}>
										<div className="film-item">
											<div className="movie-pic"><img src={item.poster.thumbnail} alt="" /></div>
											<div className="film-desc">
												<div className="movie-biaoti">
													<p>{item.name}</p>
													<span></span>
													<i className="iconfont">&#xe637;</i>
												</div>
												<div className="movie-jjie">{item.intro}</div>
												<div className="movie-yyuan">
													<span className="movie-sj">{(new Date(item.premiereAt).getMonth() + 1) + '月' + (new Date(item.premiereAt).getDate() + '日上映')}</span>
													<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
													<span className="movie-sj">{ week(item.premiereAt) }</span>
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
		var that = this;
		$.get('http://localhost:8080/coming-soon', function (res) {

			var dataArrcoming = JSON.parse(res).data.films;
			// console.log(dataArrnow)
			that.props.changeComingsoon(dataArrcoming);
		})

	}


}

function week(time) {
	var d = new Date(time);
	var a = d.getDay();
	switch (a) {
			
		case 1:
			return "星期一";
		case 2:
			return "星期二";
		case 3:
			return "星期三";
		case 4:
			return "星期四";
		case 5:
			return "星期五";
		case 6:
			return "星期六";	
		default:
			return "星期日";

	}
}

var Comingsoon = connect(
	function (state, ownProps) {
		return {
			comingFilmlist: state.comingsoonfilms
		}
	},
	function (dispatch, ownProps) {
		return {
			changeComingsoon: function (cominglistM) {
				dispatch({
					type: 'CHANGE_COMINGSOON',
					cominglistM: cominglistM
				})
			}
		}
	}
)(Comingsoons)
export default Comingsoon;
