import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './register.css'
import {connect} from 'react-redux'
import * as registerActions from './registerAction'
import { hashHistory } from 'react-router'
// import $ from 'jquery';
// import {cookie} from '../../../utils/jquery.cookie';


class RegisterComponent extends React.Component{
    componentWillUpdate(nextProps, nextState){
      
        
        console.log(nextProps.registertype)
        if(nextProps.registertype&&this.refs.passwordRegister1.value!=''){
            if((nextProps.registerset)[0].aa=='null'&&nextProps.registertype==1){
                alert('请输入正确信息')
            }else if((nextProps.registerset[0]).aa=='fail'&&nextProps.registertype==1){
                alert('账户已存在')
            }else if((nextProps.registerset)[0].aa=='ok'&&nextProps.registertype==1){
                alert('注册成功')
                hashHistory.push('login')
            }
        }else 
        if(this.refs.usernameRegister.value=''){
            return false;
        }
    }

    login(event) {
        hashHistory.push('login')
    }
    state={
        url:'register.php'
    }
    register(){
        if(this.refs.passwordRegister.value!=this.refs.passwordRegister1.value){
            
            alert('两次密码不一样');
            return false;
        }else{
            this.props.getRegister(this.state.url, {username:this.refs.usernameRegister.value,password:this.refs.passwordRegister.value});
        }
    }
    render(){
        return (
            <div className="box1">
                <div className="top"><span className="goback" onClick={this.props.router.goBack}>&lt;</span></div>
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
        registerset: state.register.response,
        registertype:state.register.status,
    
    }
}

export default connect(registerToState, registerActions)(RegisterComponent);
