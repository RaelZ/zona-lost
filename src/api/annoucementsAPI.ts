import axios from 'axios';
import { API_URL } from '../config';

class AnnoucementsAPI {
  getAll = () => axios.get(`${API_URL}Announcement/GetAllAnnouncements`).then((res) => res.data);
}

export const annoucementsAPI = new AnnoucementsAPI();
