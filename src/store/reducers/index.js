import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './auth';
import {commonReducers} from './common';
import {homeReducer} from './home'
import {getUserReducer, updateUserReducer} from './akun'
import { notificationReducer } from './notification';
import { detailReducer } from './detail';

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  commonReducers,
  homeReducer,
  detailReducer,
  getUserReducer,
  updateUserReducer,
  notificationReducer,
});

export default reducer;
