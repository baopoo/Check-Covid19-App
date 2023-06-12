import api from '../api'

const URLS = {
    fetchCountryUrl: 'countries'
}

export const fetchCountry = () => {
    return api.get(URLS.fetchCountryUrl, {
        baseURL: 'https://ss.covid19checkins.com/backend/api/'
    })
}