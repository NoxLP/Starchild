const axios = require('axios')

const api = axios.create({
  baseURL: 'https://starback.herokuapp.com',
  withCredentials: false
})

export { api }
