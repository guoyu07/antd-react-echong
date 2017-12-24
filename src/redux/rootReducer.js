import {combineReducers} from 'redux'
import typeReducer from '../components/type/typeReducer'
import shopReducer from '../components/type/shoplist/shopReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allorder from "../components/mine/orderlist/allorder/allorderReducer";
import petinfomation from "../components/mine/Petinformation/informationReducer"
import register from '../components/mine/register/registerReducer'
import login from '../components/mine/login/loginReducer'
import cart from '../components/cart/cartReducer'
import home from '../components/home/homeComponentReducer'
import homeList from '../components/home/homeList/homeListComponentReducer'

export default combineReducers({
    datagrid, home, allorder,petinfomation,register,login,typeReducer,shopReducer,homeList,cart
})