import axios from '@/utils/axios';

interface IUserData{
  id?: number;
  name?: string;
}
export const getList = () => {
  return axios.get<Array<any>>(`/api/users${location.search}`, {});
};
export const getOne = (data:IUserData) => {
  return axios.get(`/api/users/select`, {params: data});
};
export const createOne = (data:IUserData) => {
  return axios.post(`/api/users/create`, data);
};
export const delOne = (data:IUserData) => {
  return axios.post(`/api/users/del`, data);
};
export const updateOne = (data:IUserData) => {
  return axios.post(`/api/users/update`, data);
};