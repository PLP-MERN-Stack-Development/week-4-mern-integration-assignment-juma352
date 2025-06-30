import API from './api';

export const loginUser = (formData) => API.post('/auth/login', formData).then(res => res.data);
export const registerUser = (formData) => API.post('/auth/register', formData).then(res => res.data);
