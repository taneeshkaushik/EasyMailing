import axios from 'axios';

// const baseURL = 'https://esmp-2021.el.r.appspot.com';
// const baseURL ='http://35.200.249.156:8080';
const baseURL = 'http://localhost:8081';


const  axiosInstance = axios.create({

	baseURL: baseURL
});
export default axiosInstance;