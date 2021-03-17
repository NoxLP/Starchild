import { api } from './backConnection.js'

export default {
  getUser: async function() {
    console.log('get user')

    let user
    try {
      user = (
        await api.get('/users/me', {
          headers: { token: localStorage.getItem('token') }
        })
      ).data
      console.log('USER: ', user)
    } catch (err) {
      console.log('error retrieving user data: ', err)
    }

    return user
  }
}
