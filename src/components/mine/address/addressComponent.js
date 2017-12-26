import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { NavBar, Icon } from 'antd-mobile';
import * as adressAction from './addressAction'

class AddressComponent extends React.Component {
    mine(event) {
        hashHistory.push('mine')
    }
    componentDidMount() {
        this.props.getAdress('address.php', { username: window.localStorage.username })
    }
    addRegion() {
        hashHistory.push('AddRegion')
    }
    render(){
        if (!this.props.address) {
            return null
        }
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.mine()}
                    rightContent={[
                        <span key="addpet" onClick={this.addRegion}>添加</span>,
                    ]}
                >收货地址</NavBar>
                {function () {
                    if (!window.localStorage.username) {
                        return <div style={{ height: '40rem' }} className="gologin">

                        </div>
                    }
                }()}
                
                {this.props.address.map(function (item, idx) {
                    return (<div key={idx}>
                        <div>
                            <span className="addressusername">{item.username}</span><span className="addressphone">{item.phonenumber}</span>
                        </div>
                        <div>{item.addressee}{item.detailedly}</div>
                        <div>
                            <span>当前默认</span>
                            <span>编辑</span>
                            <span>删除</span>
                            
                        </div>
                    </div>)
                })}
            </div>
        )
    }
}
const address = function (state) {
    return {
        address: state.address.response
    }
}
export default connect(address, adressAction)(AddressComponent);