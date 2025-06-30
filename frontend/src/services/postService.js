import API from './api';

export const getPosts = () => API.get('/posts').then(res => res.data);
export const getPostById = (id) => API.get(`/posts/${id}`).then(res => res.data);
export const createPost = (data) => API.post('/posts', data).then(res => res.data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data).then(res => res.data);
export const deletePost = (id) => API.delete(`/posts/${id}`).then(res => res.data);
