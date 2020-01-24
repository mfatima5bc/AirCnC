import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.43.33:3333'
});
//exp://127.0.0.1:19000
export default api;