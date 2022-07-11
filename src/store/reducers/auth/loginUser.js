import {LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from '../../types';

const initialState = {
  userData: {},
  isLogin: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLogin: true,
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
