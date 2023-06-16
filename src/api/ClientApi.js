import axios from 'axios';
import { getCookie } from '../utils/manageCookies';

export const baseURL = 'https://long-shorts-worm.cyclic.app';

let apiClient = axios.create({
  baseURL,
  withCredentials: false,
  timeout: 30000,
  headers: {
    authorization: `Bearer ${getCookie('token')}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
const setAuthHeader = () => {
  apiClient = axios.create({
    baseURL,
    withCredentials: false,
    timeout: 30000,
    headers: {
      authorization: `Bearer ${getCookie('token')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
let adminApiClient = axios.create({
  baseURL,
  withCredentials: false,
  timeout: 30000,
  headers: {
    authorization: `Bearer ${getCookie('admintoken')}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const adminSetAuthHeader = () => {
  adminApiClient = axios.create({
    baseURL,
    withCredentials: false,
    timeout: 30000,
    headers: {
      authorization: `Bearer ${getCookie('admintoken')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

const userLogin = (payload) => {
  return apiClient.post('/users/login', payload);
};
const bookLawn = (payload) => {
  return apiClient.post('/bookings', payload);
};
const adminLogin = (payload) => {
  return apiClient.post('/emploies/login', payload);
};
const userSignUp = (payload) => {
  return apiClient.post('/users/signUp', payload);
};

export default {
  setAuthHeader,
  userLogin,
  bookLawn,
  adminSetAuthHeader,
  adminLogin,
  userSignUp,
};
