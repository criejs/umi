import axios from '@/utils/axios';

export const getDetail = () => {
  return axios.get(`/api/users${location.search}`, {});
};
