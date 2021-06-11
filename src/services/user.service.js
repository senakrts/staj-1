import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/admins/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getPublicContent() {
    return axios.get(API_URL + 'user', { header: authHeader() });
  }
}
export default new UserService();
