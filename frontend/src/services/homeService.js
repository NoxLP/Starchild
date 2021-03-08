import { api } from './backConnection.js'

export default {
  //endpoint /events/last
  getLastEvents: async function() {
    let events
    try {
      events = (await api.get('/events/last')).data
    } catch (err) {
      console.log(err)
    }
  },
  getTimelineDTOs: async function(category, limit, page) {
    let dtos
    try {
      dtos = (
        await api.get(`/events/timelinedtos/${category}`, {
          params: { limit: limit, page: page }
        })
      ).data
    } catch (err) {
      console.log(err)
    }
  }
}
