import React from 'react'
import { Button, WhiteSpace, WingBlank,NavBar,Icon,List} from 'antd-mobile';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';
import './indentComponent.css'
import '../../home/font/iconfont.css'
const Item = List.Item;
const Brief = Item.Brief;

export default class IndentComponent extends React.Component{
    state = {
        disabled: false,
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
                    onLeftClick={() =>this.cart()}
                    >订单结算
                </NavBar>
                <div className="mydetail">
                    <h2>
                        <span>邓厚锻</span>
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
                 <Item extra="$9527.00" arrow="horizontal" onClick={() => {}}>商品金额</Item>
                 <Item extra="¥5.50" arrow="horizontal" onClick={() => {}}>运费</Item>
                 <Item extra="¥15.00" arrow="horizontal" onClick={() => {}}>现金券抵押</Item>
                 <Item extra="9527个" arrow="horizontal" onClick={() => {}}>赠送Q币</Item>
                 <div className="indent_bot">
                    <p>总额：<span>¥</span><span>180.00</span></p>
                     <p><span>提交订单</span></p>
                 </div>
      
            </div>
        )
    }
}