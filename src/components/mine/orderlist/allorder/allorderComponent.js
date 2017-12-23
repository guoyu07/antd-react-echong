import React from 'react'
import { connect } from 'react-redux'
import * as allorderAction from './allorderAction'
import './allorderlist.css'
import '../../css/base.css'

class Allorder extends React.Component {
    componentDidMount(){
        this.props.getAllorder(this.props.url)
    }
    getKeys(item) {
        var newObj = item ? Object.keys(item) : []
        return newObj
    }
    render(){
        if (!this.props.allorder) {
            return null
        }
        return (
            <div style={{ width: '100%' }}>
            {
                this.props.allorder.map(function(item,idx){
                    if(item.orderstate==2){
                        return <div key={idx} className="orderlist clearfix">
                            <div className="arrearage pay"><span>等待付款</span></div>
                            <img src={item.orderdetail}/>
                            <div> <input type="button" value="去付款" className="buttonpay"/></div>
                        </div>
                    } else if (item.orderstate == 1){
                        return <div key={idx} className="orderlist clearfix">
                            <div className="paid pay"><span>已付款</span></div>
                            <img src={item.orderdetail}/>
                        </div>
                    }
                })
            }
            </div>
        )
    }
}

const allorder = function (state){
    console.log(state)
    return {
        allorder: state.allorder.response
    }
}

export default connect(allorder, allorderAction)(Allorder);