import axios from 'axios';
import { API_URL } from '../config';

class ProjectsAPI {
  getAll = () => axios.get(`${API_URL}Project/GetAllProjects`).then((res) => res.data);
}

export const projectsAPI = new ProjectsAPI();
