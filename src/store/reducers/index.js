import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './auth';
import {commonReducers} from './common';

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  commonReducers,
});

export default reducer;
