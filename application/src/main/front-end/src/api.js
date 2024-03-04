import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.16.51.201:8080'
})

export default apiClient;