import {SET_USER} from '../types';

export const setUser = value => ({
  type: SET_USER,
  payload: value,
});
