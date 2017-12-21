import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'
import home_commonList from '../components/home/home_commonList/home_commonListReducer'

export default combineReducers({
    datagrid,home_commonList
})