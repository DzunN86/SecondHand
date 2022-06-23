import {LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from '../../types';

const initialState = {
  userData: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
      };
      case LOGOUT:
        return {
          ...state,
          userData: {},
        };
    default:
      return state;
  }
};
