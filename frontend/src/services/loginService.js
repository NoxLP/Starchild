const axios = require('axios')

const api = axios.create({
  baseURL: process.env.BACK_URL,
  withCredentials: false
})

export default {
  ///auth/users/login
  login: async function(data) {
    let loginData
    try {
      loginData = (await api.post('/auth/users/login', data)).data
    } catch (err) {
      console.log('error trying to log in user: ', err)
      //TODO: show error to user
    }

    if (loginData && loginData.token) {
      localStorage.setItem('token', loginData.token)
      localStorage.setItem('name', loginData.name)
      localStorage.setItem('email', loginData.email)

      //TODO: go to home
    } //¿¿TODO??  ¿else error?
  }
}
