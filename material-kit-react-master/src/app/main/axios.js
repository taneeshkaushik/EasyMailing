import axios from 'axios';

const baseURL = 'http://localhost:8081';

const  axiosInstance = axios.create({
	baseURL: baseURL
});
export default axiosInstance;