import React from  "react";
import { NavBar, Icon,List,Button} from 'antd-mobile';
import {hashHistory} from 'react-router';
import * as shopAction from './shopAction';
import {connect} from 'react-redux';
import http from "../../../utils/httpClient";
import './shoplist.scss';
import $ from 'jquery';
const Item = List.Item;
const Brief = Item.Brief;
 class Shopcomponent extends React.Component{
   
             
    state={
        url:'goodlist.php',
        carurl:'goodcart.php',
    }
    componentDidMount(){
        this.props.getData(this.state.url,this.props.location.query)
        $('.am-tabs-tab-bar-wrap').css({display:'none'}) 
    }

 
    change(event){
        console.log(event.target)
        var d = new Date();
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        var storage = window.localStorage;  
        var data = JSON.parse(this.props.dataset.text)[0]
        data.ordertime = str
        data.username = storage.username
        data.orderstate = 1
        data.orderId = Date.parse(new Date())
        this.props.insertcart(this.state.carurl,data)
        console.log(storage.username)
    }
    render(){
        if(!this.props.dataset){
            return null
        }
        return   <div id='shoplist'>
                    <div>
                        <NavBar
                          mode="light"
                          icon={<Icon type="left" />}
                          onLeftClick={() => history.go(-1)}
                          rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                          ]}
                        >NavBar</NavBar>
                    </div>
                    <ul className='list_zx clear'>
                        <li className='list_img'><img src={JSON.parse(this.props.dataset.text)[0].goodpic} alt="" /></li>
                        <List renderHeader={() => JSON.parse(this.props.dataset.text)[0].goodname } className="my-list">
                            <Item extra={JSON.parse(this.props.dataset.text)[0].gooddetail}>￥19.80</Item>
                        </List>
                        
                    </ul>
                    <div className='add clearfix'>
                        <ul>
                            <li>客服</li>
                            <li>收藏</li>
                            <li>购物车</li>
                        </ul>
                        <div className='addbtn'
                            onClick={this.change.bind(this)}
                        ><span>加入购物车</span></div>
                    </div>
                </div>

    }
  
}
const shopState = function(state){
    return {
        dataset: state.shopReducer.response,
        status:state.shopReducer.status
    }
}

export default connect(shopState, shopAction)(Shopcomponent);