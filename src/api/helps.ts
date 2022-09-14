import axios from 'axios';
import { API_URL } from '../config';

class HelpAPI {
  getAll = () => axios.get(`${API_URL}Help`).then((res) => res.data);
}

export const helpAPI = new HelpAPI();
