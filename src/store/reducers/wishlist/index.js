import {
  GET_WISHLIST_SUCCESS,
  GET_DETAILWISHLIST_SUCCESS,
  GET_WISHLIST_LOADING,
} from '../../types';

const initialState = {
  isLoading: false,
  dataWishlist: [],
  dataDetailWishlist: {}
}

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        dataWishlist: action.payload,
      };
    case GET_DETAILWISHLIST_SUCCESS:
      return {
        ...state,
        dataDetailWishlist: action.payload,
      };
    case GET_WISHLIST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}