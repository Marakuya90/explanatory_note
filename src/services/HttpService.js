import axios from "axios";
import UserService from "@/services/UserService.js";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
}

const _axios = axios.create({
    baseURL:'http://localhost:8888/',
    // withCredentials: true,
    // timeout:1
});

const configure = () => {
    _axios.interceptors.request.use((config) => {
        const cb = () => {
            config.headers.Authorization = `Bearer ${UserService.getToken()}`;
            return Promise.resolve(config);
        };
        return UserService.updateToken(cb)
    });
};

export const getNote = _axios.get(
    'explanatory-notes')
    .then((response) => response.data)

const getAxiosClient = () => _axios();

const HttpService = {
    HttpMethods,
    getAxiosClient,
    configure,
    getNote
}

export default HttpService;