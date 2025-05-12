import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    (res) => res,
    async (err) => {
        const { response, config } = err;
        if (!response) return Promise.reject(err);

        if (config._retry) {
            return Promise.reject(err);
        }

        if (response.status === 419) {
            config._retry = true;
            await axios.post(
                '/api/auth/refresh',
                {},
                { withCredentials: true }
            );
            return axios(config);
        }

        if (response.status === 419 && response.data?.type === 'refresh') {
            window.location.href = '/admin/login';
            return;
        }

        return Promise.reject(err);
    }
);

export default axios;
