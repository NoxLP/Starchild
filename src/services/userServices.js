import { api } from './backConnection.js'

export default {
  // /users/events/favourites/:eventId
  putAddFavourite: async function(eventId) {
    let favourite
    try {
      favourite = (
        await api.put(`/users/events/favourites/${eventId}`, {
          headers: { token: localStorage.getItem('token') }
        })
      ).data
    } catch (err) {
      console.log(err)
    }
    return favourite
  }
}
