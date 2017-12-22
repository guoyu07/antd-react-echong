import React from  "react";
import { Card, WingBlank, WhiteSpace,Grid } from 'antd-mobile';
import {hashHistory} from 'react-router';
import * as typeAction from '../typeAction';
import {connect} from 'react-redux';
import http from "../../../utils/httpClient";
import './shoplist.scss';

 class Shopcomponent extends React.Component{
    state={
        url:'goods.php'
    }
    componentDidMount(){
     console.log(this.props.location)
     var title = this.props.location.query.title
      console.log(title)
       if(this.props.status ==1){
        return
        }
        this.props.getData(this.state.url, {title:title})


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
                            <button><i></i></button>
                        </li>
                    </ul>

                </div>

    }
  
}
const mapToState = function(state){
    console.log(state) 
    return {
        dataset: state.typeReducer.response,
        status:state.typeReducer.status
    }
}

export default connect(mapToState, typeAction)(Shopcomponent);