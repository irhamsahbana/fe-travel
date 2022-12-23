import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://travel.api-dc-tracker.my.id/api'
});

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('x_travel')}`;

export default axiosInstance;