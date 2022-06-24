import axios from 'axios';

const HOST = process.env.REACT_APP_HOST || 'http://localhost:38000/';

const myaxios = axios.create({
    baseURL: HOST
})

myaxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = "Bearer " + token
    }
    return config;
})


export default myaxios;