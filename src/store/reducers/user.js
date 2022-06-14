import {LOGUT_USER, SET_USER} from '../types';

const initialState = {
  userData: {},
  token: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGUT_USER:
      return {
        ...state,
        userData: {},
      };

    default:
      return state;
  }
};
