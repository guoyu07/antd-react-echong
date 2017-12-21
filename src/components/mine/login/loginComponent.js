import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './login.css'
import {connect} from 'react-redux'
import * as loginActions from './loginAction'

class LoginComponent extends React.Component{
    state={
        url:'login.php'
    }
    login(){
        this.props.getLogin(this.state.url, {username:this.refs.username.value,password:this.refs.password.value})

    }
    render(){
        return (
            <div className="box">
                <h1 className="h1">用户登录</h1>
                <label className="label"><span className="span">用户名</span><input  type="text" placeholder="请输入用户名" className="input" ref="username"/></label><br/>
                <label className="label"><span className="span">密码</span><input  type="password" placeholder="请输入密码" className="input" ref="password"/></label><br/>            
                <input type="button" value="登录" onClick={this.login.bind(this)} className="button"/>
                <p><span className="forget">忘记密码</span>用户注册<span></span></p>
            </div>
        )
    }
}
const mapToState = function(state){ 
    return {
        loginset: state.login.response
    }
}

export default connect(mapToState, loginActions)(LoginComponent);
