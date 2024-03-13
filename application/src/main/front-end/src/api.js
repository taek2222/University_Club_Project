import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.16.51.36:8080'
})

export default apiClient;