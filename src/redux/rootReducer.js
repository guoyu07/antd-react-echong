import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'
import register from '../components/mine/register/registerReducer'
import login from '../components/mine/login/loginReducer'
import home from '../components/home/homeComponentReducer'
export default combineReducers({
    datagrid,register,login,home
})