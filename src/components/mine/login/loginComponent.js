import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './login.css';
import {connect} from 'react-redux';
import * as loginAction from './loginAction';
import { hashHistory } from 'react-router';
import $ from 'jquery';
import {cookie} from '../../../utils/jquery.cookie'

class LoginComponent extends React.Component{
    
    homes(event) {
        hashHistory.push('home')
    }
    register(event) {
        hashHistory.push('register')
    }
    state={
        url:'login.php'
    }
    login(){
        this.props.getLogin(this.state.url, {username:this.refs.usernameLogin.value,password:this.refs.passwordLogin.value})

    }
    render(){
        return (
            <div className="box">
                <h1 className="login">用户登录<span></span></h1>
                <label className="label"><span className="span">用户名</span><input  type="text" placeholder="请输入用户名" className="input" ref="usernameLogin"/></label><br/>
                <label className="label"><span className="span">密码</span><input  type="password" placeholder="请输入密码" className="input" ref="passwordLogin"/></label><br/>            
                <input type="button" value="登录" onClick={this.login.bind(this)} className="button"/>
                <p className="ss"><span className="forget">忘记密码</span><span onClick={this.register}  className="forget">用户注册</span></p>
            </div>
        )
    }
}
const loginToState = function(state){ 
    
    return {
        loginset: state.login.response
    }
    
}
export default connect(loginToState, loginAction)(LoginComponent);
