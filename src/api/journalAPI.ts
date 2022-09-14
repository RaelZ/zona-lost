import axios from 'axios';
import { API_URL } from '../config';

class JournalAPI {
  getAll = () => axios.get(`${API_URL}QodeJournal`).then((res) => res.data);
}

export const journalAPI = new JournalAPI();
