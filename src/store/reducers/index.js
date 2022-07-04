import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './auth';
import {commonReducers} from './common';
import {homeReducer} from './home';
import { notificationReducer } from './notification';
import {categoryReducer} from './kategori';
import {addProductReducer} from './seller/addProduct';

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  commonReducers,
  homeReducer,
  notificationReducer,
  categoryReducer,
  addProductReducer
});

export default reducer;
