import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import * as homeListComponentAction from './homeListComponentAction'
import {  WhiteSpace, WingBlank,SearchBar,Tabs,Badge,Modal,Toast } from 'antd-mobile';
import '../base.css'
import './homeList.css'
import '../font/iconfont.css'
import $ from 'jquery'
const alert = Modal.alert;

class HomeListComponent extends React.Component{
    state={
        url:'homeList.php',
        carurl:'goodcart.php'
    }
    flyHome(){
        hashHistory.push('/home')
    }
    xiaoliang(){
        var categoryName=this.props.location.query.categoryName;
        var typeList=this.props.location.query.typeList;
        this.props.getHomeList(this.state.url,{category:categoryName,typeList:typeList,xiaoliang:'xiaoliang'})
    }
    priceup(){
        var categoryName=this.props.location.query.categoryName;
        var typeList=this.props.location.query.typeList;
        this.props.getHomeList(this.state.url,{category:categoryName,typeList:typeList,price:'up'})
    }
    pricedown(){
        var categoryName=this.props.location.query.categoryName;
        var typeList=this.props.location.query.typeList;
        this.props.getHomeList(this.state.url,{category:categoryName,typeList:typeList,price:'down'})
    }
    componentDidMount(){
        var categoryName=this.props.location.query.categoryName;
        var typeList=this.props.location.query.typeList;
         this.props.getHomeList(this.state.url,{category:categoryName,typeList:typeList})
         $('.homeList_paixu').children().eq(0).css({color:'red'})
        $('.homeList_paixu').on('click','li',function(){
            $(this).css({color:'red'}).siblings('li').css({color:'#ccc'});
            $('.homeNone').children('span').css({color:'#ccc'})
        })
    }
    flyDetail(a){
        var categoryName1=this.props.location.query.categoryName;
         hashHistory.push({
            pathname:'/shoplist',
            query:{
                id:a,
                title:categoryName1
            }
        })
    }
    buybuy(a){
        
       
        var d = new Date();
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        var storage = window.localStorage;  
        var data = this.props.homeList[a]
        data.ordertime = str
        data.username = storage.username
        data.orderstate = 1
        data.subtotal = data.goodprice
        data.goodnumber= 1
        data.orderId = Date.parse(new Date())
        this.props.homeCar(this.state.carurl,data)
        console.log(data)
        alert('Buy Buy Buy', '成功添加到购物车', [
          { text: '继续逛逛'},
          {
            text: '去购物车',
            onPress: () =>hashHistory.push('/cart')
          },
        ])
    }
    render(){
        if(!this.props.homeList){
            return null
        }
        return(
            <div>
                <h1 style={{display:'flex',height:'3.2rem',lineHeight:'3rem'}}>
                    <span className="icon-p-zuo iconfont"style={{fontSize:'1.5rem'}}onClick={this.flyHome}></span>
                    <SearchBar style={{width:'90%'}}placeholder="搜索宝贝"  />
                </h1>
                <ul className="homeList_paixu">
                    <li>默认排序</li>
                    <li onClick={this.xiaoliang.bind(this)}>销量</li>
                    <li className="homeNone"style={{display:'flex',justifyContent:'spaceAround'}}>价格<span className="icon-fa-angle-up iconfont" onClick={this.priceup.bind(this)}></span><span className="icon-fa-angle-down iconfont" onClick={this.pricedown.bind(this)}></span></li>
                    <li>筛选<span className="icon-iospaw iconfont"></span></li>
                </ul>
                <p className="homeList_type">{this.props.location.query.typeList}</p>
                <ul className="homeList_box">
                    {
                        this.props.homeList.map(function(item,index){
                            return <li key={index} style={{display:'flex'}} data-id={item.goodId}>
                                    <div style={{flex:'30%'}}><img src={item.goodpic}style={{width:'100px'}}onClick={this.flyDetail.bind(this,item.goodId)}/></div>
                                    <div style={{flex:'70%'}} className="homeList_text">
                                        <p>{item.gooddetail}</p>
                                        <p>¥<span>{item.goodprice}.00</span></p>
                                        <p>互动:(100%好评) 售出:
                                            <span style={{color:'black'}}>{item.goodaudience}</span>
                                            <span className="icon-liwu iconfont fr"style={{color:'red'}} onClick={this.buybuy.bind(this,index)}>买</span>
                                        </p>
                                    </div>
                                </li>
                        }.bind(this))
                    }
                </ul>
            </div>
        )
    }
}
const passToState = function(state){
    return {
        homeList: state.homeList.response
    }
}

export default connect(passToState, homeListComponentAction)(HomeListComponent);
