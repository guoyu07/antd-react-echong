import React from 'react'
import { Button, WhiteSpace, WingBlank,NavBar,Icon,List,Modal} from 'antd-mobile';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';
import './indentComponent.css'
import '../../home/font/iconfont.css'
import * as paymentAction from './paymentAction'
const alert = Modal.alert;

const Item = List.Item;
const Brief = Item.Brief;

 class IndentComponent extends React.Component{
    state = {
        disabled: false,
        url:'payment.php'
    }
    payment(){
        console.log(this.props.location.query.orderid)
        
        alert('Buy Buy Buy', '付款成功', [
            { text: '留在原地'},
            {
                text: '确定',
                onPress: () =>{
                    this.props.getPayment(this.state.url,{orderid:this.props.location.query.orderid,orderstate:2})
                  hashHistory.push('/home');}
            },
          ])
    }
    componentDidMount(){
        console.log(this.props.paymentset)
        if(this.props.paymentset){
            alert('结账成功')
            hashHistory.push('/home')
        }
    }
    cart(){
        hashHistory.push('cart')
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    style={{borderBottom:'1px solid #ccc'}}
                    icon={<Icon type="left" />}
                    onLeftClick={() =>this.props.router.goBack()}
                    >订单结算
                </NavBar>
                <div className="mydetail">
                    <h2>
                        <span>{window.localStorage.username}</span>
                        <span>1357454654</span>
                    </h2>
                    <p>
                        <span>默认</span>
                        <span>广东省捞市捞区捞路</span>
                    </p>  
                </div>
                <List renderHeader={() => '详细'} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>在线支付</Item>
                    <Item extra="商品清单" arrow="horizontal" onClick={() => {}}>订单1</Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}}>
                          中通快递 <Brief>(默认)</Brief>
                    </Item>
                    <Item arrow="horizontal" onClick={() => {}}>现金券(5)
                        <span style={{background:'#ccc',borderRadius:'50%',padding:'0.1rem 0.4rem',margin:'0 0.5rem'}}>?</span>
                        <span style={{color:'red',border:'1px solid red',padding:'2px'}}>已选最大优惠</span>
                    </Item>
                </List>
                <List renderHeader={() => ' 订单备注（外包快递的一切配送服务要求，因各地差异可能无法满足，请您谅解）'} className="my-list">
                </List>
                 <Item extra="3.78千克(kg)" arrow="horizontal" onClick={() => {}}>重量总计<span style={{background:'#ccc',borderRadius:'50%',padding:'0.1rem 0.4rem',margin:'0 0.5rem'}}>?</span></Item>
                 <Item extra={"¥"+this.props.location.query.allPrice} arrow="horizontal" onClick={() => {}}>商品金额</Item>
                 <Item extra="¥5.00" arrow="horizontal" onClick={() => {}}>运费</Item>
                 <Item extra="¥0.00" arrow="horizontal" onClick={() => {}}>现金券抵押</Item>
                 <Item extra="9527个" arrow="horizontal" onClick={() => {}}>赠送Q币</Item>
                 <div className="indent_bot">
                    <p>总额：<span>¥</span><span>{Number(this.props.location.query.allPrice)+5}</span></p>
                     <p><span onClick={this.payment.bind(this)}>提交订单</span></p>
                 </div>
      
            </div>
        )
    }
}
const paymentToState = function(state){ 
    console.log(state)
    return {
        paymentset: state.payment.response
    }
}

export default connect(paymentToState, paymentAction)(IndentComponent);
