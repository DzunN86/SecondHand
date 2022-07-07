import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './auth';
import {commonReducers} from './common';
import {homeReducer} from './home'
import {getUserReducer, updateUserReducer} from './akun'
import { notificationReducer } from './notification';
import {categoryReducer} from './kategori';
import {addProductReducer, productSellerReducers} from './seller';
import { detailReducer } from './detail';
import { BidReducer } from './tawar';

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  commonReducers,
  homeReducer,
  detailReducer,
  getUserReducer,
  updateUserReducer,
  notificationReducer,
  categoryReducer,
  addProductReducer,
  productSellerReducers,
  BidReducer,
});

export default reducer;
