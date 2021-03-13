const axios = require('axios')

const api = axios.create({
  baseURL: "http://localhost:8010/api",
  withCredentials: false
})

export { api }
