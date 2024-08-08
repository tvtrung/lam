import axios from 'axios';
// import AuthService from "./services/AuthService";

const axiosInstance: any = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URI,
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(function (config: any) {
  // Dùng để kiểm tra auth
  // const token = AuthService.getAccessToken();
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

axiosInstance.interceptors.response.use(
  (res: any) => {
    return res.data;
  },
  (err: any) => {
    // API error
    const error = err.response;
    // if (error.status === 401) {
    //   AuthService.logout();
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
