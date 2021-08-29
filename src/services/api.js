import axios from 'axios'

const api = axios.create({
    baseURL: 'https://back-end-desafio.herokuapp.com/',
})

export default api;

