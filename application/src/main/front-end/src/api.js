import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.16.50.142:8080'
})

export default apiClient;