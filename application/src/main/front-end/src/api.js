import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.35.28:8080'
})

export default apiClient;