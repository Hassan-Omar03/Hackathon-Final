import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};