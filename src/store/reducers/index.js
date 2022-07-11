import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './auth';
import { commonReducers } from './common';
import { homeReducer } from './home'
import { getUserReducer, updateUserReducer } from './akun'
import { notificationReducer } from './notification';
import { categoryReducer } from './kategori';
import { addProductReducer, productSellerReducers, upProductReducers, detailSellerReducer, deleteProductReducers } from './seller';
import { detailReducer } from './detail';
import { bidReducer } from './tawar';

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
});

export default reducer;
