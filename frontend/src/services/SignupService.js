import { api } from './backConnection.js'

export default {
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

      //TODO: go to home
    } //¿¿TODO??  ¿else error?
  }
}
