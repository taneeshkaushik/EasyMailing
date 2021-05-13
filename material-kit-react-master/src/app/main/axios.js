import axios from 'axios';

const baseURL = 'http://34.93.255.144:8080';

const  axiosInstance = axios.create({
	baseURL: baseURL
});
export default axiosInstance;