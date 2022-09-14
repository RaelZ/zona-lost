import axios from 'axios';
import { API_URL } from '../config';

class LanguageAPI {
  getAll = () => axios.get(`${API_URL}ProgrammingLanguage/GetAllProgrammingLanguages`).then((res) => res.data);
}

export const languageAPI = new LanguageAPI();
