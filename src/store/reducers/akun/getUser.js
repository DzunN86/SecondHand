import {GET_USER_SUCCESS, GET_USER_FAILED} from '../../types';

const initialState = {
  userProfile: {},
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      };

    case GET_USER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
