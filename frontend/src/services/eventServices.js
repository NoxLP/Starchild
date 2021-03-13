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
  },
  //events/:eventId
  getEvent: async function(eventId) {
    let event
    try {
      event = (
        await api.get(`/events/${eventId}`, {
          headers: { token: localStorage.getItem('token') }
        })
      ).data
    } catch (err) {
      console.log(err)
    }
    return event
  },
  //events/:eventId/moon
  getEventMoonPhase: async function(eventId) {
    let event
    try {
      event = (
        await api.get(`/events/${eventId}/moon`, {
          headers: { token: localStorage.getItem('token') }
        })
      ).data
    } catch (err) {
      console.log(err)
    }
    return event
  },
  getEventImage: async function(eventId) {
    let image
    try {
      image = (
        await api.get(`/events/${eventId}/image`, {
          headers: { token: localStorage.getItem('token') }
        })
      ).data
      console.log('image: ', image)
    } catch (err) {
      console.log(err)
    }
    return image
  },
  getEventWeather: async function(lat, lon, eventId) {
    let weather
    try {
      weather = (
        await api.get(`/events/${eventId}/weather`, {
          params: { lat: lat, lon: lon },
          headers: { token: localStorage.getItem('token') }
        })
      ).data
    } catch (err) {
      console.log(err)
    }
    return weather
  }
}
