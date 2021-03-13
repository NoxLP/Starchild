import { api } from './backConnection.js'

export default {
  getEventImage: async function(eventId) {
    let image
    try {
      image = (await api.get(`/events/${eventId}/image`)).data
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
          params: { lat: lat, lon: lon }
        })
      ).data
    } catch (err) {
      console.log(err)
    }
    return weather
  }
}
