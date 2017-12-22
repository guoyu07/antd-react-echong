import {combineReducers} from 'redux'
import typeReducer from '../components/type/typeReducer'
import shopReducer from '../components/type/shoplist/shopReducer'
import datagrid from '../components/datagrid/datagridReducer'
import home_commonList from '../components/home/home_commonList/home_commonListReducer'
import allorder from "../components/mine/orderlist/allorder/allorderReducer";
import petinfomation from "../components/mine/Petinformation/informationReducer"
import register from '../components/mine/register/registerReducer'
import login from '../components/mine/login/loginReducer'
export default combineReducers({

    datagrid, home_commonList, allorder,petinfomation,register,login,home_commonList,typeReducer,shopReducer

})