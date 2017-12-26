import React from 'react'
import { connect } from 'react-redux'
import * as peteditAction from './peteditAction'
import { hashHistory } from 'react-router'
import { NavBar, Icon } from 'antd-mobile';
import './petedit.css'

class PeteditComponent extends React.Component {
    componentDidMount(){
        this.props.getInformation('petinformation.php', { id: this.props.location.query.petid, username: window.localStorage.username})
    }
    petinformation(event) {
        hashHistory.push('petinformation')
    }
    petedits(){
        this.props.peteditAction('petedit.php', {username: window.localStorage.username,petid: this.props.location.query.petid, nickname: this.refs.nickname.value, species: this.refs.species.value, state: this.refs.state.value, sex: this.refs.sexx.value, datebirth: this.refs.datebirth.value})
    }
    render(){
        if (!this.props.information) {
            return null
        }
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.petinformation()}
                >编辑宠物</NavBar>
                {function () {
                    if (!window.localStorage.username) {
                        return <div style={{ height: '40rem' }} className="gologin">
                        </div>
                    }
                }()}
                {this.props.information.map(function (item, idx) {
                    return <div key={idx} className="editpet">
                        <img src="src/images/cat_portrait.jpg" className="peyimg" />
                        <span className="nicknameedit">{item.nickname}{function () {
                            if (item.sex == "男") {
                                return <img src={'./src/images/nan.png'} className="sex" />
                            } else if (item.sex == '女') {
                                return <img src={'./src/images/women.png'} className="sex" />
                            }
                        }()}<a className="species">{'(' + item.species + ')'}</a></span>
                        <label className="pets"><span className="petedit">昵称</span><input type="text" placeholder={"宠物新昵称"} className="nick" ref="nickname" /></label><br />
                        <label className="pets"><span className="petedit">种类</span><input type="text" placeholder={"宠物的品种"} className="species" ref="species" /></label><br />
                        <label className="pets"><span className="petedit">状态</span><input type="text" placeholder={"宠物现状态(已婚，未婚，走失...)"} className="state" ref="state" /></label><br />
                        <label className="pets"><span className="petedit">性别</span><input type="text" placeholder={"雌?雄?"} className="sexx" ref="sexx" /></label><br />
                        <label className="pets"><span className="petedit">出生日期</span><input type="text" placeholder={"xxxx-xx-xx"} className="datebirth" ref="datebirth" /></label><br />
                        <input type="button" value="保存" className="petbtn" onClick={this.petedits.bind(this)}/>
                    </div>
                }.bind(this))}
            </div>
        )
    }
}
const petedit = function (state) {
    return {
        information: state.petinfomation.response
    }
}
export default connect(petedit, peteditAction)(PeteditComponent);