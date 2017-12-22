import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'
import register from '../components/mine/register/registerReducer'
import login from '../components/mine/login/loginReducer'
import home_commonList from '../components/home/home_commonList/home_commonListReducer'
export default combineReducers({
    datagrid,register,login,home_commonList
})