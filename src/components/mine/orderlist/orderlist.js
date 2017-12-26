import React from 'react'
import { Tabs, WhiteSpace,NavBar, Icon, Modal, Button,WingBlank, Toast } from 'antd-mobile';
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import * as orderlistAction from './orderlistAction'
import './orderlist.css'
import '../css/base.css'

const alert = Modal.alert;

class orderlist extends React.Component{
    state = {
        url: 'allorder.php',
        moudledh:''
    }
    indent() {
        hashHistory.push('indent')
    }
    orderlist(event) {
        //订单不同状态显示不同内容
        if (event.title =="全部订单"){
            this.setState({ moudledh:0})
        } else if (event.title == "待收货"){
            this.setState({ moudledh: 2 })
        }
        this.props.getOrder(this.state.url, { category: event.title, username: window.localStorage.username})
    }
    mine(event) {
        hashHistory.push('mine')
    }
    
    componentDidMount() {
        var storage = window.localStorage.username;
        var category
        if (this.props.location.query.page==0){
            category = "全部订单"
        } else if (this.props.location.query.page==1){
            category="待付款"
        } else if (this.props.location.query.page==2){
            category = "待收货"
        } else if (this.props.location.query.page==3) {
            category = "待评价"
        }
        this.props.getOrder(this.state.url, { category: category, username: storage})
    }
    render(){
        if (!this.props.orderlist) {
            return null
        }
        const tabs = [
            { title: '全部订单' },
            { title: '待付款' },
            { title: '待收货' },
            { title: '待评价' },
        ];
        return (
            <div >   
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.mine()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >订单列表</NavBar>
                <Tabs tabs={tabs} 
                    swipeable={false} ref="orderlist"
                    initialPage={this.props.location.query.page*1}
                    onTabClick={this.orderlist.bind(this)}>
                </Tabs>
                {function(){
                    if(!window.localStorage.username){
                        return <div style={{ height: '40rem' }} className="gologin">
                        
                        </div>
                    }
                }()}
                <div style={{ width: '100%' }} className="allorder">
                    {
                        this.props.orderlist.map(function (item, idx) {
                            if (item.orderstate == 1) {
                                return <div key={idx} className="orderlist clearfix">
                                    <div className="orderlisttop"><span className="transaction">订单号{item.ordertime}</span><span className="copewith">{function () {
                                        var goodprice = item.goodprice
                                        var number = item.goodnumber
                                        return '应付 ￥:' + goodprice * number
                                    }()}</span></div>
                                    <div className="arrearage pay"><span>等待付款</span></div>
                                    <img src={item.goodpic} className="imglist" /><span>{item.goodname}</span>
                                    <div> <input type="button" value="去付款" className="buttonpay" onClick={this.indent}/></div>
                                </div>
                            } else if (item.orderstate == 3) {
                                return <div key={idx} className="orderlist clearfix">
                                    <div className="orderlisttop"><span className="transaction">订单号{item.ordertime}</span><span className="copewith">{function () {
                                        var goodprice = item.goodprice
                                        var number = item.goodnumber
                                        return '已付 ￥:' + goodprice * number
                                    }()}</span></div>
                                    <div className="paid pay"><span>已付款(已评价)</span></div>
                                    <img src={item.goodpic} className="imglist" /><span>{item.goodname}</span>
                                </div>
                            } else if (item.orderstate == 2){
                                return <div key={idx} className="orderlist clearfix">
                                    <div className="orderlisttop"><span className="transaction">订单号{item.ordertime}</span><span className="copewith">{function () {
                                        var goodprice = item.goodprice
                                        var number = item.goodnumber
                                        return '已付 ￥:' + goodprice * number
                                    }()}</span></div>
                                    <div className="receipt pay" onClick={() => alert('确认收货', '商品已收到？？？', [
                                        { text: 'Cancel', onPress: () => console.log('cancel') },
                                        {
                                            text: 'Ok',
                                            onPress: () => new Promise((resolve) => {
                                                setTimeout(resolve, 500);
                                                this.props.getOrder(this.state.url, { orderid: item.orderid, username: window.localStorage.username, moudledh:this.state.moudledh})
                                                console.log(this)
                                            }),
                                        },
                                    ])}><span>确认收货</span></div>
                                    <img src={item.goodpic} className="imglist" /><span>{item.goodname}</span>
                                </div>
                            } else if (item.orderstate == 4) {
                                return <div key={idx} className="orderlist clearfix">
                                    <div className="orderlisttop"><span className="transaction">订单号{item.ordertime}</span><span className="copewith">{function () {
                                        var goodprice = item.goodprice
                                        var number = item.goodnumber
                                        return '已付 ￥:' + goodprice * number
                                    }()}</span></div>
                                    <div className="receipt pay"><span>去评价</span></div>
                                    <img src={item.goodpic} className="imglist" /><span>{item.goodname}</span>
                                </div>
                            }
                        }.bind(this))
                    }
                </div>
            </div>
        )
    }
}
const orderlists = function (state) {
    return {
        orderlist: state.orderlist.response
    }
}
export default connect(orderlists, orderlistAction)(orderlist);