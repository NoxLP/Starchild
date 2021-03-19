const axios = require('axios')

const api = axios.create({
  baseURL: 'https://starback.herokuapp.com/api/',
  withCredentials: false
})

export { api }
