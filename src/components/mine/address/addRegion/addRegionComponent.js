import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { NavBar, Icon } from 'antd-mobile'
import * as addRegionAction from "./addRegionAction";
class AddregionComponent extends React.Component {
    AddressComponent() {
        hashHistory.push('AddressComponent')
    }
    addRegion(){
        if (this.refs.regionname.value == '' || this.refs.regionphone.value==''|| this.refs.regionress.value==''|| this.refs.detailedly.value==''){
           alert('请完善你的地址信息')
           return
        }
        if (!window.localStorage.username){
            alert('请先登录')
            return
        }
        var _phone = this.refs.regionphone.value;
        if (!/^1[34578]\d{9}$/.test(_phone)) {
            alert('手机号码不合法');
            return false;
        }
        this.props.getAddregion('addregion.php', { username: window.localStorage.username, regionname: this.refs.regionname.value, regionphone: _phone, regionress: this.refs.regionress.value, detailedly: this.refs.detailedly.value})
    }
    componentWillUpdate(nextProps, nextState) {

        if (!nextProps.address) {
            return
        } else if (nextProps.address[0].aa = "true") {
            alert('添加成功')
            nextProps.address[0].aa = ''
        } else if (nextProps.address[0].exist == 'false') {
            nextProps.address[0].exist = ''
            alert('修改失败，请重新输入')
        }
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.AddressComponent()}
                >添加地址</NavBar>
                <label className="pets">
                    <span className="petedit">收件人</span><input type="text" placeholder={"请输入真实姓名"} className="nick" ref="regionname" />
                </label><br />
                <label className="pets">
                    <span className="petedit">手机号码</span><input type="text" placeholder={"请输入联系电话"} className="species" ref="regionphone" />
                </label><br />
                <label className="pets">
                    <span className="petedit">所在地区</span><input type="text" placeholder={"省-市-区"} className="state" ref="regionress" />
                </label><br />
                <label className="pets">
                    <span className="petedit">详细地址</span><input type="text" placeholder={"请输入详细街道地址"} className="state" ref="detailedly" />
                </label><br />
                <input type="button" value="保存" className="petbtn" onClick={this.addRegion.bind(this)} />    
            </div>
        )
    }
}
const addRegion = function (state) {
    return {
        address: state.addRegion.response
    }
}
export default connect(addRegion, addRegionAction)(AddregionComponent);