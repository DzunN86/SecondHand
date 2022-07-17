import axios from '../../plugins/axios';

// seller/banner
export const getBanner = async () => await axios.get('/seller/banner');
export const detailBanner = async (id) => await axios.get(`/seller/banner/${id}`);
export const addBanner = async (data) => await axios.post('/seller/banner', data);
export const deleteBanner = async (id) => await axios.delete(`/seller/banner/${id}`);

// seller/category
export const getCategory = async () => await axios.get('/seller/category');
export const detailCategory = async (id) => await axios.get(`/seller/category/${id}`);
export const addCategory = async (name) => await axios.post('/seller/category', { name: name })
export const deleteCategory = async (id) => await axios.delete(`/seller/category/${id}`);

// seller/product
export const getProduct = async () => await axios.get('/seller/product');
export const detailProduct = async (id) => await axios.get(`/seller/product/${id}`);
export const addProduct = async (data) => await axios.post('/seller/product', data, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    },
});
export const updateProduct = async (id, data) => await axios.put(`/seller/product/${id}`, data, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    },
});
export const deleteProduct = async (id) => await axios.delete(`/seller/product/${id}`);

// seller/order
export const getSellerOrder = async () => await axios.get('/seller/order');
export const detailSellerOrder = async (id) => await axios.get(`/seller/order/${id}`);
export const updateSellerOrder = async (id, status) => await axios.patch(`/seller/order/${id}`, { status: status });
export const getSellerOrderProduct = async (id) => await axios.get(`/seller/order/product/${id}`);