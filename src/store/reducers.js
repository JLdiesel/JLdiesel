import { combineReducers } from 'redux-immutable';
import { LoginReducer } from '@screens/my/store';
import { homeReducer } from '@screens/first/store';
export default combineReducers({
  LoginReducer,
  homeReducer
});
//对combineReducers进行数据结构优化
