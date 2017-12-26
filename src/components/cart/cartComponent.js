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
        show:false,
        allPrice:0,

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
            
            // this.refs.cc.style.display="none";
        }else{
            // this.refs.cc.style.display="block";
        }
        this.jisuan()
    }
    oneCheck(e){
        var lis =document.getElementsByClassName('goodlist')[1].children;  
        if(e.target.checked){
            this.state.allPrice=lis[d].children[1].children[5].innerText
        }
    }
    componentWillUpdate(nextProps, nextState){

      
    }
    jia(a,b,c,d){
        var newNum=Number(b)+1;
        this.props.getCart(this.state.url,{username:window.localStorage.username,addNum:newNum,orderid:a})
        this.jisuan()
        var lis =document.getElementsByClassName('goodlist')[1].children;        
        console.log(lis[d].children[1].children[5].innerText)
        
    }
    jian(a,b,c,d){
        // var newNum=Number(b)-1;
        // this.props.getCart(this.state.url,{username:window.localStorage.username,addNum:newNum,orderid:a})
    
        // var lis =document.getElementsByClassName('goodlist')[1].children;
        // console.log(lis.length)
        // console.log(lis[d].children[1].children[5].innerText)
        // this.setState({
        //     allPrice:(lis[d].children[1].children[5].innerText)*b
        // })
        // for(var i=0;i<lis.length;i++){
        // }
    }
    jisuan(){

    }
    delete(a){
        this.props.getCart(this.state.url,{username:window.localStorage.username,deleteid:a})
        this.jisuan()
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
                    <h1 className="xuanze"><input type="checkbox" className="xz"/>全选</h1>
                    <ul className="goodlist">
                        {
                            this.props.cartset.map(function(item,index){
                                item.subtotal=item.goodnumber*item.goodprice;
                                return      <li className="goodli" key={index}>
                                                <h3>
                                                    <input type="checkbox" className="xz oneCheck" />
                                                    <span><img   className="image" src={item.goodpic}/></span>
                                                    <div className="gooddetail">
                                                        <span>{item.goodname}&nbsp;</span>
                                                        <span>亲子系&nbsp;</span>
                                                        <span>{item.gooddetail}&nbsp;</span>
                                                        <span>{item.goodcolor}&nbsp;</span>
                                                        <span>L号&nbsp;</span>
                                                        <span>{item.goodcolor}&nbsp;</span><br/>
                                                        <span className="goodbiaozi">￥</span>
                                                        <input className="goodprice" value={item.goodprice}  disabled="disabled"/><input type="button" value="删除" onClick={this.delete.bind(this,item.orderid)} className="delgood"/>
                                                    </div>
                                                </h3>
                                                <h4 className="selectnub">
                                                    <span className="jian" onClick={this.jian.bind(this,item.orderid,item.goodnumber,item.goodprice,index)}>-</span>
                                                    <span className="nub" ref={item.orderid}>{item.goodnumber}</span>
                                                    <span className="jia" onClick={this.jia.bind(this,item.orderid,item.goodnumber,item.goodprice,index)}>+</span>
                                                    <span className="subtotal">小计：</span><span className="subtotal1">￥</span><span className="subtotal1 xiaoji">{item.subtotal}</span>
                                                </h4>
                                            </li>
                            }.bind(this))
                              
                        }
                    </ul>
                    <div className="checkout">
                        <input type="checkbox" className="allselect xz"/>
                        <span>总额:</span><span className="allprice" ref="allMoney">{this.state.allPrice}</span>
                        <input type="button" value="去结账" className="enter"onClick={this.jisuan.bind(this)}/>
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
