import { api } from './backConnection.js'

export default {
  getEventData: async function(id) {
    let event
    try {
      event = (await api.get(`/events/${id}`)).data
    } catch (err) {
      console.log(err)
    }
    return event
  }
}
