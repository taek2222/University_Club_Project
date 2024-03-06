import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://34.64.174.140:8080'
})

export default apiClient;