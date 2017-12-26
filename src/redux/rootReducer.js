import {combineReducers} from 'redux'
import typeReducer from '../components/type/typeReducer'
import shopReducer from '../components/type/shoplist/shopReducer'
import datagrid from '../components/datagrid/datagridReducer'
import orderlist from "../components/mine/orderlist/orderlistReducer";
import petinfomation from "../components/mine/Petinformation/informationReducer"
import register from '../components/mine/register/registerReducer'
import login from '../components/mine/login/loginReducer'
import cart from '../components/cart/cartReducer'
import home from '../components/home/homeComponentReducer'
import homeList from '../components/home/homeList/homeListComponentReducer'
import homeSearch from '../components/home/homeSearch/homeSearchReducer'
import changepwd from '../components/mine/changePwd/changePwdReducer'
import addedit from '../components/mine/Petinformation/addedit/addeditReducer'
import commit from '../components/type/shoplist/commit/commitReducer'
import payment from '../components/cart/indentComponent/paymentReducer'
export default combineReducers({
    datagrid, home, orderlist, petinfomation, register, login, typeReducer, shopReducer, homeList, cart, changepwd,homeSearch,addedit,commit,payment
})