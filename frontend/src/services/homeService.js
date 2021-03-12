import { api } from './backConnection.js'

export default {
  // /events/last
  getLastEvents: async function() {
    let events
    try {
      events = (await api.get('/events/last')).data
    } catch (err) {
      console.log(err)
    }
    return events
  },
  // /events/timelinedtos/:categoryId
  getTimelineDTOs: async function(category, limit) {
    let dtos
    try {
      dtos = (
        await api.get(`/events/timelinedtos/${category}`, {
          params: { limit: limit }
        })
      ).data
    } catch (err) {
      console.log(err)
    }
    return dtos
  }
}
