import axios from 'axios';

const baseURL = 'http://172.26.1.59:8081';

const  axiosInstance = axios.create({
	baseURL: baseURL
});
export default axiosInstance;