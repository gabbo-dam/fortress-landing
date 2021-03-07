import axios from 'axios';
import { BASE_URL } from '../config';
import { showNotification } from './Notifications';
// import history from '../history';

function makeHeaders() {
  let headerObj = {};
  headerObj = {
    // 'x-api-key': 'KnZOBAp9MX3VGVXSGu4uc3iUnv4GKgSx5DarFDww'
  };

  return headerObj;
}

const axiosApi = axios.create({
  baseURL: `${BASE_URL}/`,
});

axiosApi.interceptors.request.use((request) => {
  if (!request.ignoreAuth) {
    request.headers = makeHeaders();
  }
  return request;
});

axiosApi.interceptors.response.use(response => response, (err) => {
  showNotification('Unknown server error', 'error', 5000);
  return Promise.reject(err);
});

export default axiosApi;
