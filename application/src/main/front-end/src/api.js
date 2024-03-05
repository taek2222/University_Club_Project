import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.16.63.216:8080'
})

export default apiClient;