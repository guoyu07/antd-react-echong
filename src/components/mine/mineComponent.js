import Spinner from '../spinner/spinnerComponent'
import React from 'react'
import { Button, WhiteSpace, WingBlank, Card, NavBar, Icon} from 'antd-mobile';
import { hashHistory } from 'react-router'
import './css/mine.css'
import './font/iconfont.css'
import './css/base.css'

export default class MineComponent extends React.Component{
    state={
        show:false,
        myname:''
    }
    componentDidMount(){      
      var storage = window.localStorage;
      if(storage.username){ 
          
        this.refs.mineLogin.style.display='none';
        this.refs.minename.style.display="block";
        this.refs.mineimg.style.display="block";
        this.refs.outbox.style.display="block" ;
        
      }else if(storage.username=''){
        this.refs.mineLogin.style.display='block';
        this.refs.minename.style.display="none";
        this.refs.mineimg.style.display="none";
        this.refs.outbox.style.display="none" ;
        
      }else{
        this.refs.mineLogin.style.display='block';
        this.refs.minename.style.display="none";
        this.refs.mineimg.style.display="none";
        this.refs.outbox.style.display="none" ;
          
      }
    }
    orderlist(page) {
        hashHistory.push({ pathname: 'orderlist', query:{page:page}})
        
    }
    petinformation(event){
        hashHistory.push('petinformation')
    }
    ChangePwdComponent(event) {
        hashHistory.push('ChangePwdComponent')
    }
    minelogin(){
        hashHistory.push('login')
    }
    AddressComponent(){
        hashHistory.push('AddressComponent')
    }
    outAccount(){
        if(window.confirm('你确定退出登录？')){
            window.localStorage.clear();
            this.refs.mineLogin.style.display='block';    
            this.refs.minename.style.display="none";
            this.refs.mineimg.style.display="none"; 
            this.refs.outbox.style.display="none" ;
            console.log(window.localStorage);
            return true;
        }else{
            return false;
        }
    }
    render(){
        return (
            <div>
                <Spinner show={this.state.show}/>
                <div>
                    <NavBar
                        mode="light"
                        rightContent={[
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >我的E宠</NavBar>
                </div>
                <div>
                    <div className="mineLoginbaba"><input type="button" value="请登录" className="mineLogin" ref="mineLogin" onClick={this.minelogin}/></div>
                    <Card full>
                        <Card.Header className="mine" ref="mine"
                            title={<div><span className="username" ref="minename">{window.localStorage.username}</span><div className="vip-d" ref="mineimg">vip俱乐部：v0</div></div>}
                            thumb={<img src="src/images/dog_portrait.jpg" className="headerimg-d" />}
                        />
                    </Card>
                </div>
                <div>
                    <ul className="order">
                        <li onClick={this.orderlist.bind(this,1)}>
                            <div className="iconfont icon-fukuan"></div>
                            <span ref="0">待付款</span>
                        </li>
                        <li onClick={this.orderlist.bind(this,2)}>
                            <div className="iconfont icon-liwu"></div>
                            <span ref="1">待收货</span>
                        </li>
                        <li onClick={this.orderlist.bind(this,3)}>
                            <div className="iconfont icon-pingjia"></div>
                            <span ref="2">待评价</span>
                        </li> 
                        <li className="last" onClick={this.orderlist.bind(this,0)}>
                            <div className="iconfont icon-dingdan"></div>
                            <span ref="3">全部订单</span>
                        </li>
                    </ul>
                    <ul className="order">
                        <li>
                            <div>11</div>
                            <span>优惠券</span>
                        </li>
                        <li>
                            <div>1</div>
                            <span>E宠币</span>
                        </li>
                        <li>
                            <div>000</div>
                            <span>余额</span>
                        </li>
                        <li className="last">
                            <div className="iconfont icon-qianbao"></div>
                            <span>我的钱包</span>
                        </li>
                    </ul>
                    <ul className="mainul">
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-diqiu"></i>E宠国际订单</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-women"></i>我的E宠团</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-vip"></i>vip俱乐部</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix" onClick={this.petinformation}>
                            <span className="mainleft"><i className="iconfont icon-iospaw"></i>宠物资料</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-jilu"></i>退换货记录</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix" onClick={this.AddressComponent}>
                            <span className="mainleft"><i className="iconfont icon-jilu"></i>地址管理</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-pingjia1"></i>我的评价</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-zixun"></i>我的咨询</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-shoucang"></i>我的收藏</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix" onClick={this.ChangePwdComponent}>
                            <span className="mainleft"><i className="iconfont icon-xiugaimima"></i>修改登录密码</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-liwu"></i>免费礼包兑换</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-jijin"></i>好友基金计划</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix">
                            <span className="mainleft"><i className="iconfont icon-kefu"></i>联系客服</span>
                            <span className="mainright iconfont icon-you"></span>
                        </li>
                        <li className="clearfix outbox" ref="outbox" onClick={this.outAccount.bind(this)}>
                            <span className="mainleft outAccount">退出登录</span>
                            
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

