const { api } = require('./backConnection.js')

export default {
  //endpoint: /auth/users/signup
  signup: async function(data) {
    let signupData
    try {
      signupData = (await api.post('/auth/users/signup', data)).data
    } catch (err) {
      console.log('error trying to log in user: ', err)
      //TODO: show error to user
    }

    if (signupData && signupData.token) {
      localStorage.setItem('token', signupData.token)
      localStorage.setItem('name', signupData.name)
      localStorage.setItem('email', signupData.email)

      //TODO: go to home
    } //¿¿TODO??  ¿else error?
  }
}
