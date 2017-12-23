import {combineReducers} from 'redux'
import typeReducer from '../components/type/typeReducer'
import shopReducer from '../components/type/shoplist/shopReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allorder from "../components/mine/orderlist/allorder/allorderReducer";
import petinfomation from "../components/mine/Petinformation/informationReducer"
import register from '../components/mine/register/registerReducer'
import login from '../components/mine/login/loginReducer'

import home from '../components/home/homeComponentReducer'

export default combineReducers({
    datagrid, home, allorder,petinfomation,register,login,typeReducer,shopReducer
})