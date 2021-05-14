import axios from 'axios';

const baseURL = 'https://esmp-2021.el.r.appspot.com';

const  axiosInstance = axios.create({
	baseURL: baseURL
});
export default axiosInstance;