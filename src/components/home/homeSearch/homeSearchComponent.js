import React from 'react'
import * as homeSearchAction from './homeSearchAction'
import {connect} from 'react-redux'
import '../font/iconfont.css'
import './homeSearch.css'
import {  WhiteSpace, WingBlank,SearchBar,Tabs,Badge,Button,Modal } from 'antd-mobile';
import {hashHistory} from 'react-router'
const alert = Modal.alert;

class HomeSearchComponent extends React.Component{
    state={
        url:'homeSearch.php'
    }
    componentDidMount(){
        var a=this.props.location.query.search;
        this.props.getHomeSearch(this.state.url,{searchText:a})
    }
    flyHome(){
        hashHistory.push('/home')
    }
    searchList(){
        var searchValue=this.refs.searchText.state.value;
        this.props.getHomeSearch(this.state.url,{searchText:searchValue})
    }
    searchText(a){
        this.props.getHomeSearch(this.state.url,{searchText:a})
    }
    wanwan(){

    }
    render(){
        const hot=['卫衣','马甲','可爱','2017年新款','那个玩具','吃的','喝的','拉的','住的','玩的','都没有！']
        if(!this.props.homeSearch||this.props.homeSearch.length==0){
            return(
                <div>
                    <h1 style={{display:'flex',height:'3.2rem',lineHeight:'3rem'}}>
                        <span className="icon-p-zuo iconfont"style={{fontSize:'1.5rem'}}onClick={this.flyHome}></span>
                        <SearchBar style={{width:'70%'}}placeholder="搜索" ref="searchText" />
                        <span onClick={this.searchList.bind(this)} style={{color:'black',marginTop:'-0.1rem',fontSize:'1.1rem'}}>搜索一波</span>
                    </h1>
                    <p style={{fontSize:'1.2rem',fontWeight:'bold',marginTop:'1.2rem'}}>热门搜索</p>
                    <ul className="hotSearch">
                        {
                            hot.map(function(item,index){
                                return(
                                    <li key={index} onClick={this.searchText.bind(this,item)}><span>{item}</span></li>
                                )
                            }.bind(this))
                        }
                    </ul>
                    <p className="search_empty" ><span>搜了一波空</span></p>

                </div>

            )
        }
        return(
            <div>
                <h1 style={{display:'flex',height:'3.2rem',lineHeight:'3rem'}}>
                    <span className="icon-p-zuo iconfont"style={{fontSize:'1.5rem'}}onClick={this.flyHome}></span>
                    <SearchBar style={{width:'70%'}}placeholder="搜索" ref="searchText" />
                    <span onClick={this.searchList.bind(this)} style={{color:'black',marginTop:'-0.1rem',fontSize:'1.1rem'}}>搜索一波</span>
                </h1>
                <ul className="homeList_box">
                    {
                        this.props.homeSearch.map(function(item,index){
                            return <li key={index} style={{display:'flex'}}>
                                        <div style={{flex:'30%'}}><img src={item.goodpic}style={{width:'6.25rem'}}/></div>
                                        <div style={{flex:'70%'}} className="homeList_text">
                                            <p>{item.gooddetail}</p>
                                            <p>¥<span>{item.goodprice}.00</span></p>
                                            <p>互动:(100%好评) 售出:
                                                <span style={{color:'black'}}>{item.goodaudience}</span>
                                                <span className="icon-liwu iconfont fr"style={{color:'red'}}>买</span>
                                            </p>
                                        </div>
                                    </li>
                        })    
                    }
                </ul>
            </div>
        )
    }
}
const passToState = function(state){
    return {
        homeSearch: state.homeSearch.response
    }
}

export default connect(passToState, homeSearchAction)(HomeSearchComponent);
