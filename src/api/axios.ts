import axios from 'axios';

// 1) 전역 baseURL
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// 2) 모든 요청에 httpOnly 쿠키 포함
axios.defaults.withCredentials = true;

export default axios;
