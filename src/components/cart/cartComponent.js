import React from 'react'
import { Button, WhiteSpace, WingBlank ,SearchBar,Tabs,Badge,Modal,Toast} from 'antd-mobile';
import * as cartAction from './cartAction'
import './cart.css'
import $ from 'jquery';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';
const alert = Modal.alert;

class CartComponent extends React.Component{
    state={
        url:'cart.php',
        payurl:'payment.php',
        show:false,
        allPrice:0
        
       
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

    }
    componentWillUpdate(nextProps, nextState){
      
    }
    oneCheck(a,b){
        var lis =document.getElementsByClassName('goodlist')[1].children; 
        if(lis[a].children[0].children[0].checked){
            var sum = Number(lis[a].children[1].children[5].innerText)+this.state.allPrice
            this.setState({allPrice:sum})
            this.setState({orderid:b})       
        }
        if(!lis[a].children[0].children[0].checked){
           
            var sum = this.state.allPrice-Number(lis[a].children[1].children[5].innerText)
            this.setState({allPrice:sum})            
        }
    }
    
    jian(a,b,c,d){
        var lis =document.getElementsByClassName('goodlist')[1].children; 
        var newNum=Number(b)-1;
        this.props.getNum(this.state.url,{username:window.localStorage.username,addNum:newNum,orderid:a})
        if(lis[d].children[0].children[0].checked){
            if(b<2){   
                var sum = this.state.allPrice
                this.setState({allPrice:sum})   
            }else{
                var sum = this.state.allPrice-Number(c)
                this.setState({allPrice:sum}) 
            }
        }
    }
            
    jia(a,b,c,d){
        var lis =document.getElementsByClassName('goodlist')[1].children;         
        var newNum=Number(b)+1;
        this.props.getCart(this.state.url,{username:window.localStorage.username,addNum:newNum,orderid:a})
        if(lis[d].children[0].children[0].checked){
            console.log(lis[d].children[1].children[5].innerText)
            var sum = this.state.allPrice+Number(c)
            this.setState({allPrice:sum})
        }       
        
        
    }
            
    jisuan(){
            if(this.state.allPrice==0){
                alert('请选择宝贝');
            }else{

                alert('确定支付？', '', [
                    { text: '确定'},
                    {
                    text: '取消',
                    onPress: () =>hashHistory.push('/cart')
                    },
                ])
                
                hashHistory.push({
                    pathname:'/indent',
                    query:{
                        allPrice:this.state.allPrice ,
                        orderid:this.state.orderid
                    }
                })
            }
            
        

    }
    allCheck(){          
        if($(".allCheck")[1].checked){
            $(".oneCheck").prop("checked",true);

            }else{          
            $(".oneCheck").prop("checked",false);
            
      
            }
     
    }
    delete(a){
        this.props.getCart(this.state.url,{username:window.localStorage.username,deleteid:a})
       
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
                    <h1 className="xuanze"><input type="checkbox" className="xz allCheck" onClick={this.allCheck.bind(this)} name="allCheck"/>全选</h1>
                    <ul className="goodlist">
                        {
                            this.props.cartset.map(function(item,index){
                                item.subtotal=item.goodnumber*item.goodprice;
                                return      <li className="goodli" key={index}>
                                                <h3>
                                                    <input type="checkbox" className="xz oneCheck" name="oneCheck" onClick={this.oneCheck.bind(this,index,item.orderid)}/>
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
