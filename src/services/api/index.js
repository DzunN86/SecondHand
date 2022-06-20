import axios from '../../plugins/axios';

// ============================ Auth ============================
export const login = async (email, password) => await axios.post('/auth/login', { email: email, password:password });
export const register = async (data) => await axios.post('/auth/register', data);
export const getProfile = async () => await axios.get('/auth/user/{id}');
export const updateProfile = async (data) => await axios.put('/auth/user/{id}', data);

// ============================ History=========================
export const getHistory = async () => await axios.get('/history');
export const detailHistory = async (id) => await axios.get(`/history${id}`);

// ============================ Notification ============================
export const getNotif = async () => await axios.get('/notification');
export const detailNotif = async (id) => await axios.get(`/notification${id}`);

// ============================ Seller ============================
// seller/banner
export const getBanner = async () => await axios.get('/seller/banner');
export const detailBanner = async (id) => await axios.get(`/seller/banner/${id}`);
export const addBanner = async (data) => await axios.post('/seller/banner', data);
export const deleteBanner = async (id) => await axios.delete(`/seller/banner/${id}`);

// seller/category
export const getCategory = async () => await axios.get('/seller/category');
export const detailCategory = async (id) => await axios.get(`/seller/category/${id}`);
export const addCategory = async (name) => await axios.post('/seller/category', {name: name});
export const deleteCategory = async (id) => await axios.delete(`/seller/category/${id}`);

// seller/product
export const getProduct = async () => await axios.get('/seller/product');
export const detailProduct = async (id) => await axios.get(`/seller/product/${id}`);
export const addProduct = async (data) => await axios.post('/seller/product', data);
export const updateProduct = async (id, data) => await axios.put(`/seller/product/${id}`, data);
export const deleteProduct = async (id) => await axios.delete(`/seller/product/${id}`);

// seller/order
export const getSellerOrder = async () => await axios.get('/seller/order');
export const detailSellerOrder = async (id) => await axios.get(`/seller/order/${id}`);
export const updateSellerOrder = async (id, status) => await axios.patch(`/seller/order/${id}`, {status: status});
export const getSellerOrderProduct = async (id) => await axios.get(`/seller/order/product/${id}`);

// ============================ Buyer ============================
// buyer/order
export const getBuyerOrder = async () => await axios.get('/buyer/order');
export const detailBuyerOrder = async (id) => await axios.get(`/buyer/order/${id}`);
export const addBuyerOrder = async (product_id, bid_price) => await axios.post('/buyer/order/', {product_id: product_id, bid_price: bid_price});
export const updateBuyerOrder = async (product_id, bid_price) => await axios.put('/buyer/order/', {product_id: product_id, bid_price: bid_price});
export const deleteBuyerOrder = async (id) => await axios.delete(`/buyer/order/${id}`);

// buyer/product
export const getBuyerProduct = async () => await axios.get('/buyer/product');
export const detailBuyerProduct = async (id) => await axios.get(`/buyer/product/${id}`);
