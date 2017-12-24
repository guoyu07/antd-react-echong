import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import * as cartAction from './cartAction'
import './cart.css'
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';

class CartComponent extends React.Component{
    state={
        url:'cart.php',
        show:false
    }
    componentWillUnmount(){

    }
    componentDidMount(){
        var storage = window.localStorage;       
        this.props.getCart(this.state.url,{username:storage.username})       
    }
    componentWillUpdate(nextProps, nextState){
        
        if(nextProps.carset==[]){
            nextState.show=true;
            // document.getElementsByClassName('.cc').style.display="block";         
        }else{
            // document.getElementsByClassName('.cc').style.display="none";               
            nextState.show=false;
        }
      
    }
    jia(){
        this.refs.goodnub.innerText++;
        this.refs.price1.value+=this.refs.price1.value*1
    }
    jian(){
        this.refs.goodnub.innerText--
        if(this.refs.goodnub.innerText<1){
            this.refs.goodnub.innerText=1
            return false;
        }     
    }
    render(){
        if(!this.props.cartset){
            return null
        }
            return (
                <div>
                    <h1 className="cart">购物车</h1>
                    <h2 className="cc" ref="aa"><span className="ss">区逛逛</span><span className="ss">我的收藏</span></h2>
                    <h1 className="xuanze"><input type="checkbox" className="xz"/></h1>
                    <ul >
                        {
                            this.props.cartset.map(function(item,index){
                                return      <li className="goodlist" key={index}>
                                                <h3>
                                                    <input type="checkbox" className="xz"/>
                                                    <span><img   className="image" src={item.goodpic}/></span>
                                                    <div className="gooddetail">
                                                        <span>{item.goodname}&nbsp;</span>
                                                        <span>亲子系&nbsp;</span>
                                                        <span>{item.gooddetail}&nbsp;</span>
                                                        <span>{item.goodcolor}&nbsp;</span>
                                                        <span>L号&nbsp;</span>
                                                        <span>{item.goodcolor}&nbsp;</span><br/>
                                                        <span className="goodbiaozi">￥</span>
                                                        <input className="goodprice" value="58.00"ref={item.orderid}  disabled="disabled"/>
                                                    </div>
                                                </h3>
                                                <h4 className="selectnub">
                                                    <span className="jian">-</span>
                                                    <span className="nub" ref="goodnub">1</span>
                                                    <span className="jia">+</span>
                                                </h4>
                                            </li>
                            })
                        }
                    </ul>
                    <div className="checkout">
                        <input type="checkbox" className="allselect xz"/>
                        <span>总额:</span><span className="allprice">￥1333</span>
                        <input type="button" value="去结账" className="enter"/>
                    </div>    
                </div>
            )
        
        
    }
}
const cartToState = function(state){ 
    
    return {
        cartset: state.cart.response
    }
}

export default connect(cartToState, cartAction)(CartComponent);
