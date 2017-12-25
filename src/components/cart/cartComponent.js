import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import * as cartAction from './cartAction'
import './cart.css'
import $ from 'jquery';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';

class CartComponent extends React.Component{
    state={
        url:'cart.php',
        show:false
    }
    home(){
        hashHistory.push('home')
    }
    componentWillMount(){
     
    }
    componentDidMount(){
      
        
        var storage = window.localStorage;       
        if(storage.username){
            this.props.getCart(this.state.url,{username:storage.username})  
            console.log(this.refs);     
            // this.refs.cc.style.display="none";
        }else{
            // this.refs.cc.style.display="block";
        }
    }
    componentWillUpdate(nextProps, nextState){
        
        if(nextProps.carset==[]){
            
        }else{
            console.log(this.refs.aa)
          
        }
      
    }
    jia(a){
        // this.refs.goodnub.innerText++;
        // this.refs.allMoney.innerText+=1;
        console.log(a)
    }
    jian(){
        this.refs.goodnub.innerText--
        if(this.refs.goodnub.innerText<1){
            this.refs.goodnub.innerText=1
            return false;
        }     
    }
    render(){
        if(!this.props.cartset||this.props.cartset.length==0){
            return(
                <div>
                    <h1 className="cart">购物车</h1>
                    <h2 className="cc" ref="cc"><span className="ss" onClick={this.home}>去逛逛</span><span className="ss">我的收藏</span></h2>
                    <div className="checkout">
                        <input type="checkbox" className="allselect xz"/>
                        <span>总额:</span><span className="allprice"ref="allMoney"></span>
                        <input type="button" value="去结账" className="enter"/>
                    </div> 
                </div>    
            )
        }
            return (
                <div>
                    <h1 className="cart">购物车</h1>
                    <h1 className="xuanze"><input type="checkbox" className="xz"/></h1>
                    <ul className="goodList">
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
                                                        <input className="goodprice" value={item.goodprice}  disabled="disabled"/>
                                                    </div>
                                                </h3>
                                                <h4 className="selectnub">
                                                    <span className="jian" onClick={this.jian.bind(this,item)}>-</span>
                                                    <span className="nub" ref="goodnub">{item.goodnumber}</span>
                                                    <span className="jia" onClick={this.jia.bind(this)}>+</span>
                                                </h4>
                                            </li>
                            }.bind(this))
                        }
                    </ul>
                    <div className="checkout">
                        <input type="checkbox" className="allselect xz"/>
                        <span>总额:</span><span className="allprice"ref="allMoney"></span>
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
