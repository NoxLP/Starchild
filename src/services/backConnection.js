const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: false
})

export { api }
