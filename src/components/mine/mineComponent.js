import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import './register/register.css'
export default class MineComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>注册</h1>
                <label className="label"><span className="span">用户名</span><input  type="text" placeholder="请输入用户名" className="input"/></label><br/>
                <label className="label"><span className="span">密码</span><input  type="password" placeholder="请输入密码" className="input"/></label><br/>
                <label className="label"><span className="span">确认密码</span><input  type="password" placeholder="请确认密码" className="input"/></label><br/>
                <input type="button" value="注册" />
            </div>
        )
    }
}
