import axios from 'axios';
import { API_URL } from '../config';

class UsersAPI {
  getAll = () => axios.get(`${API_URL}Ubuntu`).then((res) => res.data);
  create = (data: any) => axios.post(`${API_URL}Ubuntu`, data).then((res) => res.data);
}

export const usersAPI = new UsersAPI();
