import React from 'react'
import {Router, Route, hashHistory,browserHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'
import ProductsComponent from '../components/products/productsComponent'
import HomeComponent from '../components/home/homeComponents'
import MineComponent from '../components/mine/mineComponent'
import TypeComponent from '../components/type/typeComponent'
import ShoplistComponent from '../components/type/shoplist/shoplistComponent'
import CartComponent from '../components/cart/cartComponent'
import Orderlist from "../components/mine/orderlist/orderlist";
import Petinformation from'../components/mine/Petinformation/petinformationComponent'
import RegisterComponent from '../components/mine/register/registerComponent'
import LoginComponent from '../components/mine/login/loginComponent'

export default (
<Route path="aa">
    <Route path="/" component={AppComponent}>
        <Route path="products" component={ProductsComponent}></Route>
        <Route path="/home" component={HomeComponent}></Route>
        <Route path="/mine" component={MineComponent}></Route>
        <Route path="/cart" component={CartComponent}></Route>
        <Route path="/type" component={TypeComponent}>
        </Route>
        <Route path="/shoplist" component={ShoplistComponent}></Route>


    </Route>
    <Route path="/orderlist" component={Orderlist}></Route>
    <Route path="/petinformation" component={Petinformation}></Route>
    <Route path="/login" component={LoginComponent}></Route>  
    <Route path="/register" component={RegisterComponent}></Route>
</Route>
)