import React from 'react';
import { Button, WhiteSpace, WingBlank,NavBar, Icon } from 'antd-mobile';
import './login.css';
import {connect} from 'react-redux';
import * as loginAction from './loginAction';
import { hashHistory } from 'react-router';
import $ from 'jquery';
import Spinner from '../../spinner/spinnerComponent'


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
                if(nextProps.loginset[0].aa=='fail'&&nextProps.logintype == 1&&this.refs.usernameLogin.value!=''){
                    alert("密码或者账号不正确");
                    return ;
                }else{
                    nextState.show = false;
                    if(nextProps.loginset[0].aa=='ok'&&this.refs.usernameLogin.value!=''){
                        var storage = window.localStorage;
                        storage.setItem('username',this.refs.usernameLogin.value);
                        storage.setItem('password',this.refs.passwordLogin.value);
                       
                        hashHistory.push('home')
                    }else if(this.refs.usernameLogin.value!=''){
                        alert('登陆账号或密码有误！')                     
                    }
                }
            }
        }
    }
    componentDidUpdate(prevProps, prevState){
       
        // if(this.props.loginset[0].aa=='ok'){
        // }
    }

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
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.router.goBack()}
                >用户登录</NavBar>
                <Spinner show={this.state.show}/>               
                <h1 className="login"><span></span></h1>
                <label className="label"><span className="span">用户名</span><input  type="text" placeholder="请输入用户名" className="input" ref="usernameLogin"/></label><br/>
                <label className="label"><span className="span">密码</span><input  type="password" placeholder="请输入密码" className="input" ref="passwordLogin"/></label><br/>            
                <input type="button" value="登录" onClick={this.login.bind(this)} className="button"/>
                <p className="sa"><span className="forget1">忘记密码</span><span onClick={this.register}  className="forget2">用户注册</span></p>
            </div>
        )
    }
}
const loginToState = function(state){ 
        
    return {
        loginset: state.login.response||[],
        logintype:state.login.status,
        // verification: state.verification
    }
    
}
export default connect(loginToState, loginAction)(LoginComponent);
