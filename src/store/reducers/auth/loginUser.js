import {LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, SET_LOGIN_LOADING} from '../../types';

const initialState = {
  userData: {},
  isLogin: false,
  isLoading: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLogin: true,
      };

    case SET_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
      };
    case LOGOUT:
      return {
        ...state,
        userData: {},
        isLogin: false,
      };
    default:
      return state;
  }
};
