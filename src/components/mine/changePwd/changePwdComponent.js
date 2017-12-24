import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as changePwdAction from "./changePwdAction";
import { NavBar, Icon } from 'antd-mobile';
class ChangePwdconponent extends React.Component {
    mine(event) {
        hashHistory.push('mine')
    }
    changePwd(eve){
        var oldcode = this.refs.oldcode.value
        var newcode = this.refs.newcode.value
        var confirmcode = this.refs.confirmcode.value
        if (confirmcode != newcode){
            alert('确认密码不一致')
            return
        }
        this.props.changeAction('changePwd.php', { old: oldcode, new: newcode, username: '111'})
        
    }
    componentWillUpdate(nextProps,nextState){
        
        if (!nextProps.information){
            return
        }else if(nextProps.information[0].aa){
            hashHistory.push('mine')
            nextProps.information[0].aa=''
        } else if (nextProps.information[0].exist =='false'){
            nextProps.information[0].exist=''
            alert('修改失败，请重新输入')
        }  
    }
    render(){
        return (<div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.mine()}
            >修改登录密码</NavBar>
            <span>登录名：566</span> <br/>
            <label className="oldcode"><span className="oldcodes">旧密码</span><input type="text" placeholder={"请输入旧密码"} className="oldpwd" ref="oldcode" /></label><br />
            <label className="newcode"><span className="newcodes">新密码</span><input type="text" placeholder={"6-20位数字,字母,符号的组合"} className="newpwd" ref="newcode" /></label><br />
            <label className="confirmcode"><span className="confirmcodes">确认新密码</span><input type="text" placeholder={"6-20位数字,字母,符号的组合"} className="confirmpwd" ref="confirmcode" /></label><br />
            <input type="button" value="确定" className="pwdbtn" onClick={this.changePwd.bind(this)}/>
        </div>)
    }
}
const change = function (state) {
    
    return {
        information: state.changepwd.response
    }
}
export default connect(change, changePwdAction)(ChangePwdconponent);