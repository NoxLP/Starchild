const axios = require('axios')
require('dotenv').config()

const api = axios.create({
  baseURL: process.env.BACK_URL,
  withCredentials: false
})

export { api }
