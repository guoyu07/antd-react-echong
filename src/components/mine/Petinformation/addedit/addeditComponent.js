import React from 'react'
import { connect } from 'react-redux'
import * as addeditAction from './addeditAction'
import { hashHistory } from 'react-router'

import Spinner from "../../../spinner/spinnerComponent";

import { DatePicker, List, NavBar, Icon } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
}
const CustomChildren = ({ extra, onClick, children }) => (
    <div
        onClick={onClick}
        style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
    >
        {children}
        <span style={{ float: 'right', color: '#888' }}>{extra}</span>
    </div>
);


class AddeditComponent extends React.Component {
    state={
        show:false,
        sexx:["雌","雄"],
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
    petinformation(event) {
        hashHistory.push('petinformation')
    }
    addedit(){
        
        var datebirth=this.state.date.toLocaleDateString()
        if (this.state.sexx.indexOf(this.refs.addsexx.value)==-1){
            this.setState({ show: 'false' })
           return false;
        } 
        this.props.getAddedit('addedit.php', {username: window.localStorage.username,nickname: this.refs.addnickname.value, species: this.refs.addspecies.value, state: this.refs.addstate.value, sex: this.refs.addsexx.value, datebirth: datebirth})
    }
    componentWillUpdate(nextProps, nextState) {
        
        if (!nextProps.addedit) {
            return
        } else if (nextProps.addedit[0].aa="true") {
            alert('添加成功')
            nextProps.addedit[0].aa = ''
        } else if (nextProps.addedit[0].exist == 'false') {
            nextProps.addedit[0].exist = ''
            alert('修改失败，请重新输入')
        }
    }
    render(){
        return (<div>
            <Spinner show={this.state.show}/>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.petinformation()}
                >添加宠物</NavBar>
            {function () {
                if (!window.localStorage.username) {
                    return <div style={{ height: '40rem' }} className="gologin">

                    </div>
                }
            }()}
            <label className="pets">
                <span className="petedit">昵称</span><input type="text" placeholder={"宠物昵称"} className="nick" ref="addnickname" />
            </label><br />
            <label className="pets">
                <span className="petedit">种类</span><input type="text" placeholder={"宠物的品种"} className="species" ref="addspecies" />
            </label><br />
            <label className="pets">
                <span className="petedit">状态</span><input type="text" placeholder={"宠物现状态(已婚，未婚，走失...)"} className="state" ref="addstate" />
            </label><br />
            <label className="pets">
                <span className="petedit">性别</span><input type="text" placeholder={"雌?雄?"} className="sexx" ref="addsexx" />
            </label><br />
            <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                >
                <List.Item arrow="horizontal">出生日期</List.Item>
                </DatePicker>
            </List>
            <input type="button" value="保存" className="petbtn" onClick={this.addedit.bind(this)}/>
            
        </div>)
    }
}
const addedit = function (state) {
    return {
        addedit: state.addedit.response
    }
}
export default connect(addedit, addeditAction)(AddeditComponent);