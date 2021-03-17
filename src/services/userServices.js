import { api } from './backConnection.js'

export default {
  // /users/events/favourites/:eventId
  putAddFavourite: async function(eventId) {
    let favourite
    try {
      favourite = (
        await api.put(
          `/users/events/favourites/${eventId}`,
          {},
          {
            headers: { token: localStorage.getItem('token') }
          }
        )
      ).data
    } catch (err) {
      console.log(err)
    }
    return favourite
  },
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
