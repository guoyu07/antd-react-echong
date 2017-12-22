import React from  "react";
import { Card, WingBlank, WhiteSpace,Grid } from 'antd-mobile';
import {hashHistory} from 'react-router';
import * as shopAction from './shopAction';
import {connect} from 'react-redux';
import http from "../../../utils/httpClient";
import './shoplist.scss';

 class Shopcomponent extends React.Component{
   
             
    state={
        url:'goods.php'
    }
    
    componentDidMount(){
        
         
    }    
    render(){
        console.log(this.props.dataset)
        
        return   <div>
                    
                    <ul className='list_zx clear'>
                        <li className='list_img'><img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" alt="" /></li>
                        <li className='list_con clearfix'>
                            <h3>马琳第三方空间克隆速度放缓速度放缓</h3>
                            <p>￥129.00</p>
                            <span>互动：(100%好评) 售出：18</span>
                        </li>
                    </ul>
                </div>

    }
  
}
const shopState = function(state){
    //console.log(state) 
    return {
        dataset: state.typeReducer.response,
        status:state.typeReducer.status
    }
}

export default connect(shopState, shopAction)(Shopcomponent);