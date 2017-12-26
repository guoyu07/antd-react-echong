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
import HomeListComponent from '../components/home/homeList/homeListComponent'
import HomeSearchComponent from '../components/home/homeSearch/homeSearchComponent'
import PeteditComponent from '../components/mine/Petinformation/petedit/peteditComponent'
import ChangePwdComponent from '../components/mine/changePwd/changePwdComponent'
import IndentComponent from '../components/cart/indentComponent/indentComponent'
import AddeditComponent from '../components/mine/Petinformation/addedit/addeditComponent'
import AddressComponent from "../components/mine/address/addressComponent";
import AddRegionComponent from "../components/mine/address/addRegion/addRegionComponent";

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
    <Route path="/type" component={TypeComponent}></Route>
    <Route path="/PeteditComponent" component={PeteditComponent}></Route>
    <Route path="/homeList" component={HomeListComponent}></Route>
    <Route path="/homeSearch" component={HomeSearchComponent}></Route>
    <Route path="/ChangePwdComponent" component={ChangePwdComponent}></Route>
    <Route path="/indent" component={IndentComponent}></Route>
    <Route path="/AddeditComponent" component={AddeditComponent}></Route>
    <Route path="/AddressComponent" component={AddressComponent}></Route>
    <Route path="/AddRegion" component={AddRegionComponent}></Route>
</Route>
)