import { api } from './backConnection.js'

export default {
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
