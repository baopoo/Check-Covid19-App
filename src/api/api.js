import axios from "axios";

const axiosParams = {
    baseUrl: import.meta.env.VITE_NODE_ENV === 'development' ? 'http://localhost:8080' : '/'
}

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
    return {
        get: (url, config) => axios.get(url, config),
        post: (url, body, config) => axios.post(url, body, config),
        patch: (url, body, config) => axios.patch(url, body, config),
        delete: (url, config) => axios.delete(url, config)
    }
}

export default api(axiosInstance)