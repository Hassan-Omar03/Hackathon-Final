import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Helper to get the token
const getAuthToken = () => localStorage.getItem('token');

export const getAllEvents = () => {
  return axios.get(`${API_URL}/events`);
};

export const getUserEvents = () => {
  return axios.get(`${API_URL}/events/user`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
};

export const getEventById = (id) => {
  return axios.get(`${API_URL}/events/${id}`);
};

export const createEvent = (eventData) => {
  return axios.post(`${API_URL}/events`, eventData, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
};

export const updateEvent = (id, eventData) => {
  return axios.put(`${API_URL}/events/${id}`, eventData, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
};

export const deleteEvent = (id) => {
  return axios.delete(`${API_URL}/events/${id}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
};

export const rsvpToEvent = (id) => {
  return axios.post(`${API_URL}/events/${id}/rsvp`, {}, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
};
