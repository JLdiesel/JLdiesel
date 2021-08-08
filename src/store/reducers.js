import { combineReducers } from 'redux-immutable';
import { LoginReducer, SettingReducer } from '@screens/my/store';
import { homeReducer } from '@screens/first/store';
export default combineReducers({
  LoginReducer,
  homeReducer,
  SettingReducer
});
//对combineReducers进行数据结构优化
