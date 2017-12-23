import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './cart.css'

class CartComponent extends React.Component{
    state={
        
    }
    jia(){
        console.log(this);
    }
    render(){
        return (
            
            <div>
                <h1 className="cart">购物车</h1>
                <h2 className="cc"><span className="ss">区逛逛</span><span className="ss">我的收藏</span></h2>
                <h1 className="xuanze"><input type="checkbox" className="xz"/></h1>
                <ul >
                    <li className="goodlist">
                        <h3>
                            <input type="checkbox" className="xz"/>
                            <span><img   className="image" src="./src/images/dog_clothes_001.jpg"/></span>
                            <div className="gooddetail">
                                <span>趣派CHEEPET&nbsp;</span>
                                <span>亲子系&nbsp;</span>
                                <span>火焰复合两脚衣&nbsp;</span>
                                <span>红色&nbsp;</span>
                                <span>L号&nbsp;</span>
                                <span>酒红色&nbsp;</span><br/>
                                <span className="goodprice" ref="price1">￥58.00</span>
                            </div>
                        </h3>
                        <h4 className="selectnub"><span className="jian">-</span><span className="nub">1</span><span className="jia" onClick={this.jia}>+</span></h4>
                    </li>
                </ul>
                <div className="checkout">
                    <input type="checkbox" className="allselect xz"/>
                    <span>总额:</span><span className="allprice">￥1333</span>
                    <input type="button" value="去结账" className="enter"/>
                </div>    
            </div>
        )
    }
}

export default CartComponent;