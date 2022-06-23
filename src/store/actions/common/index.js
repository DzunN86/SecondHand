import {SET_LOADING} from '../../types';

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});
