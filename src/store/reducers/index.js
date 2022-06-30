import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './auth';
import {commonReducers} from './common';
import {homeReducer} from './home'
import {getUserReducer, updateUserReducer} from './akun'

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  commonReducers,
  homeReducer,
  getUserReducer,
  updateUserReducer,
});

export default reducer;
