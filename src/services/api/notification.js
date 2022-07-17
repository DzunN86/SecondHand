import axios from '../../plugins/axios';

export const getNotif = async () => await axios.get('/notification');
export const PatchNotif = async id => await axios.patch(`/notification/${id}`);
export const detailNotif = async id => await axios.get(`/notification${id}`);
