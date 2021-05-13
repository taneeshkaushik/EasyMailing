import axios from 'axios';

const baseURL = 'http://35.200.249.156:8080';

const  axiosInstance = axios.create({
	baseURL: baseURL
});
export default axiosInstance;