import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './login.css';
import {connect} from 'react-redux';
import * as loginAction from './loginAction';
import { hashHistory } from 'react-router';
import $ from 'jquery';


class LoginComponent extends React.Component{
    state = {
        show:false,
        url:'login.php'
    }

    componentWillUpdate(nextProps, nextState){
        
            
        if(nextProps.logintype){

            if(nextProps.logintype == 0){
                nextState.show = true;
            }else{
                if(this.refs.usernameLogin.value==''){
                    return false;
                }else{
                    nextState.show = false;
                    if(nextProps.loginset.aa=='ok'){
                        // hashHistory.push('home')
                        console.log(nextProps.loginset)
                    }else{
                        alert('登陆账号或密码有误！')                     
                    }
                }
            }
        }
    }
    componentDidUpdate(prevProps, prevState){
       
        if (this.props.loginset.aa == 'ok'){
            var storage = window.localStorage;
            storage.setItem('username',this.props.loginset[1]);
            storage.setItem('password',this.props.loginset[1]);
            
        }
    }
    // componentWillMount(){
        
    //     const storage = window.localStorage;
    //     this.props.getLogin(this.state.url,{username:storage.username,password:storage.password})
        
    // }

    // componentDidUpdate(prevProps, prevState){
        
    //     if(this.props.loginset.length){
    //     }
    // }
    login(){
        console.log(this.refs.usernameLogin.value)
        this.props.getLogin(this.state.url, {username:this.refs.usernameLogin.value,password:this.refs.passwordLogin.value})

    }
    homes(event) {
        hashHistory.push('home')
    }
    register(event) {
        hashHistory.push('register')
    }
    render(){
        return (
            <div className="box1">
                <div className="top"><span className="goback" onClick={this.props.router.goBack}>&lt;</span></div>
                <h1 className="login">用户登录<span></span></h1>
                <label className="label"><span className="span">用户名</span><input  type="text" placeholder="请输入用户名" className="input" ref="usernameLogin"/></label><br/>
                <label className="label"><span className="span">密码</span><input  type="password" placeholder="请输入密码" className="input" ref="passwordLogin"/></label><br/>            
                <input type="button" value="登录" onClick={this.login.bind(this)} className="button"/>
                <p className="sa"><span className="forget1">忘记密码</span><span onClick={this.register}  className="forget2">用户注册</span></p>
            </div>
        )
    }
}
const loginToState = function(state){ 
        console.log(state);
    return {
        loginset: state.login.response||[],
        logintype:state.login.status,
        // verification: state.verification
    }
    
}
export default connect(loginToState, loginAction)(LoginComponent);
