const axios = require('axios')

const api = axios.create({
  baseURL: process.env.BACK_URL,
  withCredentials: false
})

export default {
  ///auth/users/login
  login: async function(data) {
    try {
      return await api.post('/auth/users/login', data)
    } catch (err) {
      console.log('error trying to log in user: ', err)
    }
  }
}
