import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.gridgetest.shop',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  (config: {headers: {Authorization: string}}) => {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkb2Zhcm1pbmdAZG9mYXJtaW5nLmNvbSIsInN1YiI6IjMyNTExMzE0MTEiLCJpYXQiOjE3MTcyNzIxMzgsImV4cCI6MTcxODEzNjEzOH0.kYMPNO65ljRgwfvzstmxobgHn2EIVlnG5yz3b21y4Gg';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
