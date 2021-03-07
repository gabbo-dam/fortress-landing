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
  // withCredentials: true,
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
  console.log('err=====', err);
  // if (err.response && err.response.status === 401) {
  //   localStorage.clear();
  //   showNotification('Your session has expired. Please log in again', 'error', 5000);
  //   // history.push('/login');
  //   return true;
  // }
  // if (err.response && err.response.status === 403) {
  //   showNotification(err.response.data.msg, 'error', 5000);
  // }
  // if (err.response && err.response.status === 500) {
  //   showNotification('Unknown server error', 'error', 5000);
  // }
  return Promise.reject(err);
});

export default axiosApi;
