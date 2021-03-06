const axios = require('axios')

const api = axios.create({
  baseURL: process.env.BACK_URL,
  withCredentials: false
})

export default { api }
