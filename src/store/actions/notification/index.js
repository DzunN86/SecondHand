import {showError} from '../../../plugins';
import {getNotif, PatchNotif} from '../../../services/api/notification';
import {
  GET_NOTIFICATION_FAIL,
  GET_NOTIFICATION_LOADING,
  GET_NOTIFICATION_SUCCESS,
  SET_NOTIFICATION_TOTAL,
} from '../../types/notification';

export const setNotificationSuccess = data => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload: data,
});

export const setNotificationLoading = loading => ({
  type: GET_NOTIFICATION_LOADING,
  payload: loading,
});

export const setNotificationFailed = error => ({
  type: GET_NOTIFICATION_FAIL,
  payload: error,
});
export const countNotification = total => ({
  type: SET_NOTIFICATION_TOTAL,
  payload: total,
});

export const getNotification = () => async dispatch => {
  dispatch(setNotificationLoading(true));
  await getNotif()
    .then(res => {
      dispatch(setNotificationSuccess(res.data));
      let total = 0;
      res.data.map(item => {
        if (item.read === false) {
          total++;
        }
      });
      dispatch(countNotification(total));
      dispatch(setNotificationLoading(false));
    })
    .catch(err => {
      dispatch(setNotificationFailed(err.response.data.message));
      dispatch(setNotificationLoading(false));
      showError(err.response.data.message);
    });
};

export const ReadNotification = id_notif => async dispatch => {
  dispatch(setNotificationLoading(true));
  await PatchNotif(id_notif)
    .then(() => {
      dispatch(setNotificationLoading(false));
    })

    .catch(() => {
      dispatch(setNotificationLoading(false));
    });
};
