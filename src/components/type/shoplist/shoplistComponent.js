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

    }
    componentDidMount(){
        console.log(this.props.location.query)
        this.props.getData(this.state.url,this.props.location.query)
        $('.am-tabs-tab-bar-wrap').css({display:'none'}) 
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
                        <div className='addbtn'><span>加入购物车</span></div>
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