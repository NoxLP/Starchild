import { api } from './backConnection.js'
import eventServices from './eventServices.js'

export default {
  // /events/last
  getLastEvents: async function() {
    let events
    try {
      events = (await api.get('/events/last')).data
      for (let i = 0; i < events.length; i++) {
        let event = events[i]
        event['img'] = await eventServices.getEventImage(event._id)
      }
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
