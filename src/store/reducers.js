// import {
//     combineReducers
// } from 'redux'
//对combineReducers进行数据结构优化
import {
    combineReducers
} from 'redux-immutable'
import {
    reducer as LoginReducer
} from '@screens/my/store'
export default combineReducers({
    LoginReducer
})