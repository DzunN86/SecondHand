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
} from './seller';
import {detailReducer} from './detail';
import {bidReducer} from './tawar';
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
  bidReducer,
  upProductReducers,
  detailSellerReducer,
  deleteProductReducers,
  orderSellerReducers,
  changePasswordReducer,
});

export default reducer;
