import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Use relative path since we're using Vite's proxy
});

// Products
export const getProducts = () => api.get('/products');
export const getProduct = (id: string) => api.get(`/products/${id}`);
export const createProduct = (data: any) => api.post('/products', data);
export const updateProduct = (id: string, data: any) => api.put(`/products/${id}`, data);
export const deleteProduct = (id: string) => api.delete(`/products/${id}`);
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/products/upload', formData);
  return response.data.url;
};

// Categories
export const getCategories = () => api.get('/categories');
export const getCategory = (id: string) => api.get(`/categories/${id}`);
export const createCategory = (data: any) => api.post('/categories', data);
export const updateCategory = (id: string, data: any) => api.put(`/categories/${id}`, data);
export const deleteCategory = (id: string) => api.delete(`/categories/${id}`);

// Orders
export const getOrders = () => api.get('/orders');
export const getOrder = (id: string) => api.get(`/orders/${id}`);
export const createOrder = (data: any) => api.post('/orders', data);
export const updateOrder = (id: string, data: any) => api.put(`/orders/${id}`, data);
export const deleteOrder = (id: string) => api.delete(`/orders/${id}`);

// Dashboard
export const getDashboardMetrics = (filters?: {
  categoryId?: string;
  productId?: string;
  startDate?: string;
  endDate?: string;
}) => api.get('/orders/dashboard', { params: filters });

export default api;
