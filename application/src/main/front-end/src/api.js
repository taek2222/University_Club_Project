import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.200.181:8080'
})

export default apiClient;