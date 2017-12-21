import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './register.css'
import {connect} from 'react-redux'
import * as registerActions from './registerAction'
import { hashHistory } from 'react-router'


class RegisterComponent extends React.Component{
    login(event) {
        hashHistory.push('login')
      }
    state={
        url:'register.php'
    }
    register(){
        
        if(this.refs.username.value==''||this.refs.password.value==''||this.refs.password1.value==''){
            alert('信息不能为空');
        }else if(this.refs.password.value==this.refs.password1.value){
            this.props.getRegister(this.state.url, {username:this.refs.username.value,password:this.refs.password.value})
    
        }
    }
    render(){
        return (
            <div className="box">
                <h1 className="h1">用户注册</h1>
                <label className="label"><span className="span">用户名</span><input  type="text" placeholder="请输入用户名" className="input" ref="username"/></label><br/>
                <label className="label"><span className="span">密码</span><input  type="password" placeholder="请输入密码" className="input" ref="password"/></label><br/>
                <label className="label"><span className="span">确认密码</span><input  type="password" placeholder="请确认密码" className="input" ref="password1"/></label><br/>
                <input type="button" value="注册" onClick={this.register.bind(this)} className="button"/>
            </div>
        )
    }
    componentDidUpdate(){
        console.log(this.props.dataset.text);
        if(this.props.dataset.text=='fail'){
            alert('用户名已存在');
        }else if(this.props.dataset.text=='ok'){
            alert('注册成功');this.login();
        }
        
    }
}
const mapToState = function(state){ 
    return {
        dataset: state.register.response     
    }
    
}

export default connect(mapToState, registerActions)(RegisterComponent);
