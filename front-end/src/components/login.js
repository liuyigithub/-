import React, { Component } from 'react';

import { connect } from 'react-redux';
import { render } from 'react-dom';
import { HashRouter as Router, Link } from 'react-router-dom';
import $ from 'jquery';
class Logins extends Component {
	render() {
		return (			
               <div className="login-view">
                    <form action="" method="get">
                        <div className="form-group">
                            <input type="text" placeholder="输入手机号/邮箱" className="input-login" ref="phone" onChange={this.yzPhone.bind(this)}/>
                            <span className="sms-code"  style={{display:"none"}} ref="codeSpan">
                                <i className="sms-code-tex" ref="codei" onClick={this.sends.bind(this)}>发送验证码</i>
                            </span>
                            <div className="input-bg"></div>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="输入密码/验证码" className="input-login" ref="password"/>                           
                            <div className="input-bg"></div>
                        </div>
                        <div className="form-group code-img">
                            <input type="text" placeholder="图形验证码" className="input-login"/>
                            <img src="http://captcha.maizuo.com/captcha/code/getImg?key=76B25DA08206049E" alt=""/>                            
                            <div className="input-bg"></div>
                        </div>
                        <span className="wrong-msg">{this.props.txt}</span>
                        <button type="submit" className="sub-mit" onClick={this.changes.bind(this)} >登录</button>
                    </form>
               </div>            
		);
    }
    // 满足条件出现验证码
    yzPhone(){
        var phone=this.refs.phone.value;
        var verify=mobilePhone(phone);
        if(verify.list){
            this.refs.codeSpan.style.display="block";
        }else{
            this.refs.codeSpan.style.display="none";
        }

    } 
    //   倒计时
    sends(){
        var t=60;
        this.refs.codei.innerHTML="重发 "+t+" s";
        var that=this;
        clearInterval(timer);
        var timer=setInterval(function(){
            t--;
            that.refs.codei.innerHTML="重发 "+t+" s";
            if(t==0){
                clearInterval(timer);
                that.refs.codei.innerHTML="发送验证码";
            }

        },1000)
    }
    changes(){
        var phone=this.refs.phone.value;
        var password=this.refs.password.value;
        
        var verifyPhone=mobilePhone(phone);
        var verifyPassword=mobilePassword(password);
        // console.log(verifyPhone)

        if(!verifyPhone.list){
            this.props.changeTxt(verifyPhone.message);
        }
        if(!verifyPassword.list){
            this.props.changeTxt(verifyPassword.message);
        }
        if(verifyPhone.list&&verifyPassword.list){
             this.props.changeTxt(verifyPassword.message);
             $.get('http://localhost:8080/login?phone='+phone+'&password='+password,function(res){
                console.log(res);
                window.location.href="http://localhost:3000/?#/userpage";
            })
        }
       
    }
    componentDidMount(){
        this.props.changTitle("我的")
    }
	
}

//验证手机号码
function mobilePhone(num){
    var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
    var hint;
    if(!pattern.test(num)){
        var err = '请输入正确手机号或邮箱';
        hint={
            message:err,
            list:false
        }
        return hint;
    }else{

        hint={
            message:"登陆成功",
            list:true
        }
        return hint;
    }
    
   
}
//验证验证码或密码
function mobilePassword(num){

     var hint;
    if(!/^\d{6}$/.test(num)){
        var err="请输入正确的验证码或密码";
        hint={
           message:err,
           list:false 
        }
        return hint;
    }else{
        hint={
            message:"登陆成功",
            list:true
        }
        return hint;
    }

}

var Login=connect(
	function(state,ownProps){
		return {
			txt:state.txt
		}
    },
    function(dispatch, ownProps) {
		return {
			changeTxt: function(res) {
				dispatch({
					type:'CHANGE_TXT',
					txt:res
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
)(Logins)
export default Login;