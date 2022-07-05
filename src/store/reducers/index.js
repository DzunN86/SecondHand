import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './auth';
import {commonReducers} from './common';
import {homeReducer} from './home'
import {getUserReducer, updateUserReducer} from './akun'
import { notificationReducer } from './notification';
import {categoryReducer} from './kategori';
import {addProductReducer, productSellerReducers} from './seller';


const reducer = combineReducers({
  loginReducer,
  registerReducer,
  commonReducers,
  homeReducer,
  getUserReducer,
  updateUserReducer,
  notificationReducer,
  categoryReducer,
  addProductReducer,
  productSellerReducers,
});

export default reducer;
