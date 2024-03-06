import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://34.64.174.140:8080'
})

export default apiClient;