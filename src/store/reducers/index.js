import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './auth';
import {commonReducers} from './common';
import {homeReducer} from './home';
import {getUserReducer, updateUserReducer} from './akun';
import {notificationReducer} from './notification';
import {categoryReducer} from './kategori';
import {
  addProductReducer,
  productSellerReducers,
  upProductReducers,
  detailSellerReducer,
  deleteProductReducers,
  orderSellerReducers,
  upOrderSellerReducers,
} from './seller';
import {detailReducer} from './detail';
import {buyerReducer} from './buyer';
import {changePasswordReducer} from './akun';

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
  buyerReducer,
  upProductReducers,
  detailSellerReducer,
  deleteProductReducers,
  orderSellerReducers,
  changePasswordReducer,
  upOrderSellerReducers,
});

export default reducer;
