import api from "../api";

const URLS = {
    fetchContactUrl: 'my-app/contact-number'
}

export const fetchContact = () => {
    return api.get(URLS.fetchContactUrl, {
        baseURL: 'https://647e9adcc246f166da8f2f57.mockapi.io/'
    })
}