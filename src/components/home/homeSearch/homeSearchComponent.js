import React from 'react'
import * as homeSearchAction from './homeSearchAction'
import {connect} from 'react-redux'
import '../font/iconfont.css'
import './homeSearch.css'
import {  WhiteSpace, WingBlank,SearchBar,Tabs,Badge } from 'antd-mobile';
import {hashHistory} from 'react-router'

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
    render(){
        console.log(this.props.homeSearch)
        if(!this.props.homeSearch){
            return null
        }
        return(
            <div>
                <p>{this.props.location.query.search}</p>
                <h1 style={{display:'flex',height:'3.2rem',lineHeight:'3rem'}}>
                    <span className="icon-p-zuo iconfont"style={{fontSize:'1.5rem'}}onClick={this.flyHome}></span>
                    <SearchBar style={{width:'90%'}}placeholder="搜索"  />
                </h1>
                <ul className="homeList_box">
                    {
                        this.props.homeSearch.map(function(item,index){
                            return <li key={index} style={{display:'flex'}}>
                                        <div style={{flex:'30%'}}><img src={item.goodpic}/></div>
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
