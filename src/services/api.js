import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-jobs-net.herokuapp.com',
})

export default api;