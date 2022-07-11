import {BID_SUCCESS, BID_FAILED} from '../../types';

const initialState = {
  dataBid: {},
};

export const bidReducer = (state = initialState, action) => {
  switch (action.type) {
    case BID_SUCCESS:
      return {
        ...state,
        dataBid: action.payload,
      };

    case BID_FAILED:
      return {
        ...state,
      };
      
    default:
      return state;
  }
};
