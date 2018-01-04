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
        carurl:'goodlist.php',
    }
    componentDidMount(){
        this.props.getData(this.state.url,this.props.location.query)
        $('.am-tabs-tab-bar-wrap').css({display:'none'}) 
    }
    commit(){
        hashHistory.push('/commit')
    }
 
    change(event){
        var d = new Date();
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        var storage = window.localStorage;  
        var data = JSON.parse(this.props.dataset.text).data1[0]
        data.id = this.props.location.query.id
        data.title = this.props.location.query.title
        data.ordertime = str
        data.username = storage.username
        data.orderstate = 1
        data.goodnumber= 1
        data.subtotal=data.goodprice
        data.orderId = Date.parse(new Date())
        this.props.getData(this.state.carurl,data)

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
                        >{JSON.parse(this.props.dataset.text).data1[0].goodname }</NavBar>
                    </div>
                    <ul className='list_zx clear' style={{marginBottom:'2.5rem'}}>
                        <li className='list_img'><img src={JSON.parse(this.props.dataset.text).data1[0].goodpic} alt="" /></li>
                        <List renderHeader={() => JSON.parse(this.props.dataset.text).data1[0].goodname } className="my-list">
                            <Item extra={JSON.parse(this.props.dataset.text).data1[0].gooddetail} className = 'price'
                            ><span className='price'>￥{JSON.parse(this.props.dataset.text).data1[0].goodprice}</span></Item>
                        </List>
                        <List>
                            <Item extra='地区' >{JSON.parse(this.props.dataset.text).data1[0].goodaddress}</Item>
                        </List>
                       <List  className="pinglun" style={{marginTop:'2rem'}}>
                        <Item extra="好评率（100%）" arrow="horizontal" onClick={() => {}} className="my-commit"><span >商品评论</span></Item>
                        {
                            JSON.parse(this.props.dataset.text).data2.map(function(item,index){

                                 return <Item extra={item.time} align="top" key={index} thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>

                                 {item.username}<Brief>{item.detail}</Brief>
                                </Item>
                            }).slice(0,3)
                        }
                        <Item>
                            <Button onClick={this.commit.bind(this)}>更多评论</Button>
                        </Item>
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