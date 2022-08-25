import axios from '@/utils/axios';

export const getUsers = () => {
  return axios.get(`/api/users${location.search}`, {});
};