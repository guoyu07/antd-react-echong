import React from 'react'
import {Router, Route, hashHistory,browserHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'
import ProductsComponent from '../components/products/productsComponent'
import HomeComponent from '../components/home/homeComponents'
import MineComponent from '../components/mine/mineComponent'
import TypeComponent from '../components/type/typeComponent'
import ShoplistComponent from '../components/type/shoplist/shoplistComponent'
import CartComponent from '../components/cart/cartComponent'
export default (
    <Route path="/" component={AppComponent}>
        <Route path="products" component={ProductsComponent}></Route>
        <Route path="/home" component={HomeComponent}></Route>
        <Route path="/mine" component={MineComponent}></Route>
        <Route path="/type" component={TypeComponent}>
            <Route path='/type/shoplist' component={ShoplistComponent}></Route>
        </Route>
        <Route path="/cart" component={CartComponent}></Route>
    </Route>
)