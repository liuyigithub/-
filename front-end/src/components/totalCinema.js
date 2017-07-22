import React, { Component } from 'react';
import { connect } from 'react-redux';
import {render} from 'react-dom';
import $ from 'jquery';
import { Accordion, List } from 'antd-mobile';
import GotoTop from './gotoTop.js';
class TotalCinemas extends Component {
    onChange = (key) => {
        console.log(key);
    }
	render() {
		return (           
            <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                {
                    this.props.movieCinema.map(function(item,index){
                        return( <Accordion.Panel header={item.district} key={index}>
                                    <List className="my-list">{
                                        item.list.map(function(items,indexs){
                                        return  <div className="cinema-wrap" key={indexs}>
                                                    <div className="cinema-padding">
                                                        <div className="cinema-main-left">
                                                            <div className="cinema-title">
                                                                <span>{items.name}</span>
                                                                <i className="iconfont icon-zi">&#xe606;</i>
                                                                <i className="iconfont">&#xe692;</i>
                                                            </div>
                                                            <div className="cinema-privilege">
                                                                <span className="cinema-privilege-l">可乐爆米花</span>
                                                                <span className="cinema-privilege-r">优惠活动</span>
                                                            </div>
                                                            <div className="cinema-address">
                                                                {items.address}
                                                            </div>
                                                            <div className="cinema-location">
                                                                <span>距离</span>
                                                                <span>未知</span>
                                                            </div>
                                                        </div>
                                                        <div className="cinema-main-right">
                                                            <i className="iconfont">&#xe637;</i>
                                                        </div>
                                                    </div>
                                                </div>
                                        })
                                            
                                        }
                                        
                                    </List>
                                </Accordion.Panel>)
                    })
                }
              <GotoTop></GotoTop>                       
            </Accordion>            
		);
	}

    componentDidMount() {
        var that=this;
        that.props.changTitle("全部影院");
        $.get('http://localhost:8080/cinema', function (res) {
            // console.log(JSON.parse(res));
            var cinemaArr=JSON.parse(res).data.cinemas;
            // console.log(formatDisArr(cinemaArr));
            // console.log(dataArr)
            that.props.changeCinema(formatDisArr(cinemaArr));   
        })
        
    }
	
}
var TotalCinema=connect(
	function(state,ownProps){
		return {
			movieCinema:state.listTodoCinema
		}
	},
    function(dispatch, ownProps) {
		return {
			changeCinema: function(cinemaLists) {
				dispatch({
					type:'CHANGE_CINEMA',
					cinemaLists:cinemaLists
				})
            },
            changTitle:function(data){
                dispatch({
                    type:"CHANGETITLE",
                    data:data
                })
            }		
		}
	}
)(TotalCinemas)

function formatDisArr(arr){
    var disArr = [];
    var newArr = [];
    for(var i=0 ; i < arr.length; i++){
        if(disArr.indexOf(arr[i].district.name) == -1){
            disArr.push(arr[i].district.name);
            newArr.push({
                district: arr[i].district.name,
                list: []
            })
        }
    }
    for(var i = 0; i < arr.length ; i++){
        for(var j = 0; j < newArr.length ; j++){
            if( newArr[j].district == arr[i].district.name){
                newArr[j].list.push(arr[i]);
            }
        }
    }

    return newArr;
}

export default TotalCinema;