import { api } from './backConnection.js'
import eventServices from './eventServices.js'

export default {
  // /events/last
  getLastEvents: async function() {
    console.log('GET LAST EVENTS')
    console.log(api.defaults.headers.common['token'])
    let events
    try {
      events = (
        await api.get('/events/last', {
          headers: { token: localStorage.getItem('token') }
        })
      ).data
      console.log(events)
    } catch (err) {
      console.log('ERROR EN LAST EVENTS', err)
    }
    return events
  },
  getLastEventsImages: async function(events) {
    try {
      for (let i = 0; i < events.length; i++) {
        let event = events[i]
        event['img'] = await eventServices.getEventImage(event._id)
        console.log('EVENT IMAGE: ', event.img)
      }
      console.log('EVENTS IMAGES: ', events)
      return events
    } catch (err) {
      console.log('ERROR EN LAST EVENTS images', err)
    }
  },
  // /events/timelinedtos/:categoryId
  getTimelineDTOs: async function(category, limit) {
    let dtos
    try {
      dtos = (
        await api.get(`/events/timelinedtos/${category}`, {
          params: { limit: limit },
          headers: { token: localStorage.getItem('token') }
        })
      ).data
      console.log('*DTOS: ', dtos)
    } catch (err) {
      console.log(err)
    }
    return dtos
  }
}
