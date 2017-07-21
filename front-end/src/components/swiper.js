import React, { Component } from 'react';

import { render } from 'react-dom';

import { connect } from 'react-redux';
import $ from 'jquery';
import Swiper from 'swiper';

class Swipers extends Component {
    render() {
        return this.props.imgs?(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.imgs.map(function(item,index){
                            return  <div className="swiper-slide" key={index}>
                                        <img src={item.imageUrl} />
                                    </div>
                        })
                    }
                    
                </div>
            </div>
        ):<div className="jia-zai">正在加载中...</div>
    }
    componentDidMount() {
        var that=this;
        $.get('http://localhost:8080/lunbo', function (res) {
            // console.log(JSON.parse(res));
            var datas=JSON.parse(res).data.billboards;

            that.props.change(datas);

            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay:4000,
                autoplayDisableOnInteraction:false
            })    


        })
        
    }
}

var Swiperx = connect(
    function (state, ownProps) {
        return {
            imgs:state.images
        }
    },
    function(dispatch, ownProps) {
		return {
			change: function(image) {
				dispatch({
					type:'CHANGE_LUNBO',
					image:image
				})
			}			
		}
	}
)(Swipers);

export default Swiperx;

