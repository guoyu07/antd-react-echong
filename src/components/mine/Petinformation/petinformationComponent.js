import React from 'react'
import { connect } from 'react-redux'
import * as informationAction from './informationAction'
import { hashHistory } from 'react-router'
import {NavBar, Icon } from 'antd-mobile';
import './petinformation.css'
import '../font/iconfont'

class Petinformation extends React.Component{
    componentDidMount() {
        this.props.getInformation('petinformation.php')
    }
    petedit(event){
        hashHistory.push('petedit')
    }
    mine(event) {
        hashHistory.push('mine')
    }
    peteditcompomnent(id) {
        hashHistory.push({ pathname: 'PeteditComponent', query: { petid: id}})
    }
    removepet(petid){
        this.props.getInformation('removepet.php',{id:petid})
    }
    render(){
        if (!this.props.information){
            return null
        }
        return (
            <div className="information">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>this.mine()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >我的宠物</NavBar>
                {this.props.information.map(function(item,idx){
                    return <div key={idx} className="pet" ref="petid" id={item.petid}>
                        <span className="nickname">{item.nickname}{function (){
                            if (item.sex == "男") {
                                return <img src={'./src/images/nan.png'} className="sex"/>
                            }else if(item.sex=='女'){
                                return <img src={'./src/images/women.png'} className="sex" />
                            }
                        }()}<a className="species">{'('+item.species+')'}</a></span>
                        <div className="operation"><span className="edit" onClick={this.peteditcompomnent.bind(this,item.petid)}><a className="icon-pingjia1 iconfont"></a>编辑</span><span onClick={this.removepet.bind(this,item.petid)}><a className="icon-shanchu iconfont"/>删除</span></div>
                    </div>
                }.bind(this))}
            </div>
        )
    }
}
const information = function (state) {
    console.log(state)
    return {
        information:state.petinfomation.response
    }
}
export default connect(information, informationAction)(Petinformation);