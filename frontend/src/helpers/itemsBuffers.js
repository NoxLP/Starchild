let lastEventsBuffer = {
  items: [],
  set: function(array) {
    this.items = array
  }
}
let timelineItemsBuffer = []

export { lastEventsBuffer, timelineItemsBuffer }
