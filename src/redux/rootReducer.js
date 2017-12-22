import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'
import home_commonList from '../components/home/home_commonList/home_commonListReducer'
import allorder from "../components/mine/orderlist/allorder/allorderReducer";
import petinfomation from "../components/mine/Petinformation/informationReducer"

export default combineReducers({
    datagrid, home_commonList, allorder,petinfomation
})