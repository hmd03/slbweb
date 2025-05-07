import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    (res) => res,
    async (err) => {
        const resp = err.response;
        if (resp?.data?.statusCode === 419 && resp.data.type === 'access') {
            await axios.post('/api/auth/refresh');
            return axios(err.config);
        }
        if (resp?.data?.statusCode === 419 && resp.data.type === 'refresh') {
            window.location.href = '/admin/login';
        }
        return Promise.reject(err);
    }
);

export default axios;
