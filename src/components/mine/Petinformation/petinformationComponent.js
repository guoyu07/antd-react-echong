import React from 'react'
import { connect } from 'react-redux'
import * as informationAction from './informationAction'
import { hashHistory } from 'react-router'
import { Tabs, WhiteSpace, NavBar, Icon, Modal, Button, WingBlank, Toast } from 'antd-mobile';
import './petinformation.css'
import '../font/iconfont'
const alert = Modal.alert;
class Petinformation extends React.Component{
    componentDidMount() {
        this.props.getInformation('petinformation.php', { username: window.localStorage.username})
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
        this.props.getInformation('removepet.php', { id: petid, username: window.localStorage.username})
    }
    addedit(){
        hashHistory.push('AddeditComponent')
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
                        <span key="addpet" onClick={this.addedit}>添加宠物</span>,
                    ]}
                >我的宠物</NavBar>
                {function () {
                    if (!window.localStorage.username) {
                        return <div style={{ height: '40rem' }} className="gologin">

                        </div>
                    }
                }()}
                {this.props.information.map(function(item,idx){
                    return <div key={idx} className="pet" ref="petid" id={item.petid}>
                        <img src="src/images/cat_portrait.jpg" className="peyimg"/>
                        <span className="nickname">{item.nickname}{function (){
                            if (item.sex == "雄") {
                                return <img src={'./src/images/nan.png'} className="sex"/>
                            }else if(item.sex=='雌'){
                                return <img src={'./src/images/women.png'} className="sex" />
                            }
                        }()}<a className="species">{'('+item.species+')'}</a></span>
                        <div className="operation"><span className="edit" onClick={this.peteditcompomnent.bind(this, item.petid)}><a className="icon-pingjia1 iconfont"></a>编辑</span><span onClick={() => alert('确认删除', '确认删除此宠物？？', [
                            { text: 'Cancel', onPress: () => console.log('cancel') },
                            {
                                text: 'Ok',
                                onPress: () => new Promise((resolve) => {
                                    setTimeout(resolve, 500); 
                                    this.props.getInformation('removepet.php', { id: item.petid })
                                }),
                            },
                        ])}><a className="icon-shanchu iconfont"/>删除</span></div>
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