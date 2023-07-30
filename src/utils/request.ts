import axios from 'axios';
import type { AxiosError } from 'axios';
import { isBrowser } from './isBrowser';

const request = axios.create({
  timeout: 35000,
  baseURL: isBrowser() ? '/api' : process.env.NEXT_PUBLIC_API_URL, // 客户端走代理, 服务端直接请求完整地址
  // withCredentials: true, // 跨域请求时是否发送Cookie
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default request;
