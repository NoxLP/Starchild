import { api } from './backConnection.js'

export default {
  //endpoint: /auth/users/login
  login: async function(data) {
    let loginData
    try {
      loginData = (await api.post('/auth/users/login', data)).data
    } catch (err) {
      console.log('error trying to log in user: ', err)
      //TODO: show error to user
    }

    if (loginData && loginData.token) {
      console.log('LOGIN DATA:', loginData)
      localStorage.setItem('token', loginData.token)
      localStorage.setItem('user', loginData.user)
      localStorage.setItem('email', loginData.email)
      localStorage.setItem('favourites', JSON.stringify(loginData.favourites))
      api.defaults.headers.common['token'] = loginData.token
      return true
    }
    return false
  },
  //endpoint: /auth/users/signup
  signup: async function(data) {
    console.log('api ', api)
    let signupData
    try {
      signupData = (await api.post('/auth/users/signup', data)).data
    } catch (err) {
      console.log('error trying to sign up user: ', err)
      //TODO: show error to user
    }
    console.log(signupData)
    if (signupData && signupData.token) {
      localStorage.setItem('token', signupData.token)
      localStorage.setItem('user', signupData.user)
      localStorage.setItem('email', signupData.email)
      api.defaults.headers.common['token'] = signupData.token
      return true
    }
    return false
  }
}
