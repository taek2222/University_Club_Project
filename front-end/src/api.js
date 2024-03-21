// REVIEWED: 2024-03-21 by [Oh Yeon Taek]
import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export default apiClient;