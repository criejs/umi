import config from '@/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建实例时设置配置的默认值
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : config.host,
  timeout: 15000,
  withCredentials: true,
  headers: {
    'X-Businessline-Id': 30,
  },
});

interface IRes<T> {
  data: T;
  code: number;
  msg: string;
}
// 添加请求拦截器
instance.interceptors.request.use(
  function (conf: AxiosRequestConfig) {
    if (conf.data) {
      conf.data.uuid = config.uuid;
    }
    return conf;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function <T>(response: AxiosResponse<IRes<T>>):T{
    // 对响应数据做点什么
    /**
    1、集中处理响应数据（如错误码处理）

  */
    if (response?.data?.code !== 200) {
      alert(response?.data?.msg || '内部错误，请稍后重试');
    }
    return response.data.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default instance;
