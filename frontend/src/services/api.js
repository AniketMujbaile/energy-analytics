import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Register a new user.
 * @param {Object} userDetails - User details for registration.
 */
export const register = async (userDetails) => {
  const response = await api.post('/auth/register', userDetails);
  return response.data;
};

/**
 * Login user with email and password.
 * @param {Object} credentials - User credentials.
 */
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// Fetch chart data with optional filters.
export const fetchChartData = async (dateRange, algoStatus) => {
  const params = { ...dateRange };
  if (algoStatus !== undefined) {
    params.algo_status = algoStatus;
  }
  const response = await api.get('/chart/data', { params });
  return response.data;
};

// Submit a log entry.
export const submitAccessLog = async (logData) => {
  const response = await api.post('/logs', logData);
  return response.data;
};

// Fetch all access logs.
export const fetchAccessLogs = async () => {
  const response = await api.get('/logs');
  return response.data;
};


 