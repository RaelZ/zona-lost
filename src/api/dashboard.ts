import axios from "axios";
import { API_URL } from "../config";

class DashboardAPI {
  getCountAnnouncements = () =>
    axios
      .get(`${API_URL}Dashbooard/GetCountAnnouncements`)
      .then((res) => res.data);
  getFilledJournals = () =>
    axios.get(`${API_URL}Dashbooard/GetFilledJournals`).then((res) => res.data);
  getTodayHelpsCards = () =>
    axios
      .get(`${API_URL}Dashbooard/GetTodayHelpsCards`)
      .then((res) => res.data);
  getQueueHelpsCards = () =>
    axios
      .get(`${API_URL}Dashbooard/GetQueueHelpsCards`)
      .then((res) => res.data);
}

export const dashboardAPI = new DashboardAPI();
