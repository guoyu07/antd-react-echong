import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './register.css'
import {connect} from 'react-redux'
import * as registerActions from './registerAction'
import { hashHistory } from 'react-router'
// import $ from 'jquery';
// import {cookie} from '../../../utils/jquery.cookie';


class RegisterComponent extends React.Component{

    login(event) {
        hashHistory.push('login')
    }
    state={
        url:'register.php'
    }
    register(){
        this.props.getRegister(this.state.url, {username:this.refs.usernameRegister.value,password:this.refs.passwordRegister.value})
    }
    render(){
        return (
            <div className="box1">
                <h1 className="register">用户注册</h1>
                <label className="label1"><span className="span1">用户名</span><input  type="text" placeholder="请输入用户名" className="input1" ref="usernameRegister"/></label><br/>
                <label className="label1"><span className="span1">密码</span><input  type="password" placeholder="请输入密码" className="input1" ref="passwordRegister"/></label><br/>
                <label className="label1"><span className="span1">确认密码</span><input  type="password" placeholder="请确认密码" className="input1" ref="passwordRegister1"/></label><br/>
                <input type="button" value="注册" onClick={this.register.bind(this)} className="button1"/>
            </div>
        )
    }

}
const registerToState = function(state){ 
      
    return {
        registerset: state.register.response     
    }
}

export default connect(registerToState, registerActions)(RegisterComponent);
