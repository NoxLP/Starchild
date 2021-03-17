const axios = require('axios')

const api = axios.create({
  baseURL: 'https://starback.herokuapp.com:443',
  withCredentials: false
})

export { api }
