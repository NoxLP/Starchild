const axios = require('axios')

const api = axios.create({
  baseURL:
    'https://shrouded-lake-12011.herokuapp.com/https://starback.herokuapp.com:443',
  withCredentials: false
})

export { api }
