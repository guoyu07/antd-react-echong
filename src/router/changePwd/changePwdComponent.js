import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import changePwdAction from "./changePwdAction";
import { NavBar, Icon } from 'antd-mobile';
class ChangePwdconponent extends React.Component {
    render(){
        return (<div>
            66
        </div>)
    }
}
const change = function (state) {
    return {
        information: state.petinfomation.response
    }
}
export default connect(change, changePwdAction)(ChangePwdconponent);