
import React from 'react'
import { Button, WhiteSpace, WingBlank, Card, NavBar, Icon} from 'antd-mobile';
import { hashHistory } from 'react-router'
import './css/mine.css'
import './font/iconfont.css'
import './css/base.css'

export default class MineComponent extends React.Component{
    orderlist(event) {
        hashHistory.push('orderlist')
    }
    petinformation(event){
        hashHistory.push('petinformation')
    }
    ChangePwdComponent(event) {
        hashHistory.push('ChangePwdComponent')
    }
    render(){
        return (
            <div>
                <div>
                    <NavBar
                        mode="light"
                        rightContent={[
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >我的E宠</NavBar>
                </div>
                <div>
                    <Card full>
                        <Card.Header className="mine"
                            title={<div><span className="username">666</span><div className="vip-d">vip俱乐部：v0</div></div>}
                            thumb={<img src="src/images/dog_portrait.jpg" className="headerimg-d"/>}
                        />
                    </Card>
                </div>
                <div>
                    <ul className="order">
                        <li>
                            <div className="iconfont icon-fukuan"></div>
                            <span>待付款</span>
                        </li>
                        <li>
                            <div className="iconfont icon-liwu"></div>
                            <span>待收货</span>
                        </li>
                        <li>
                            <div className="iconfont icon-pingjia"></div>
                            <span>待评价</span>
                        </li>
                        <li className="last" onClick={this.orderlist}>
                            <div className="iconfont icon-dingdan"></div>
                            <span>全部订单</span>
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
                    </ul>
                </div>
            </div>
        )
    }
}

