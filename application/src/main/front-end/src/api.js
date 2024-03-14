import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.16.83.164:8080'
})

export default apiClient;