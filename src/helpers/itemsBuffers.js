const getEventFromBuffer = eventId => {
  let storage = JSON.parse(sessionStorage.getItem('timelineBuffer'))
  return (
    (
      Object.values(storage).find(category => {
        console.log('CAT: ', category)
        return category.find(event => event._id === eventId)
      }) || []
    ).filter(event => event._id === eventId)[0] || null
  )
}

export { getEventFromBuffer }
