import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.30.1.57:8080'
})

export default apiClient;