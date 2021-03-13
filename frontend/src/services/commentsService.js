import { api } from './backConnection.js'

export default {
  getEventComments: async function(eventId, limit, page) {
    console.log('getEventComments')

    let comments
    try {
      comments = (
        await api.get(`/comments/${eventId}`, {
          params: {
            limit: limit,
            page: page
          }
        })
      ).data
    } catch (err) {
      console.log('error getting event comments: ', err)
      //TODO show error
    }

    return comments
  },
  postCommentInEvent: async function(comment) {
    console.log('postCommentInEvent')

    let posted
    try {
      posted = (await api.post('/comments', comment)).data
    } catch (err) {
      console.log('error posting comment: ', err)
    }

    return posted
  },
  deleteCommentInEvent: async function(eventId, commentId) {
    console.log('deleteCommentInEvent')

    let deleted
    try {
      deleted = (await api.delete(`/comments/${commentId}/events/${eventId}`))
        .data
    } catch (err) {
      console.log('error deleting comment: ', err)
    }

    return deleted
  },
  editComment: async function(eventId, commentId, text) {
    console.log('editComment')

    let edited
    try {
      edited = (
        await api.put(`/comments/${commentId}/events/${eventId}`, {
          text: text
        })
      ).data
    } catch (err) {
      console.log('error editing comment: ', err)
    }

    return edited
  },
  postReplyInComment: async function(eventId, parentId, comment) {
    console.log('postReplyInComment')

    let edited
    try {
      edited = (
        await api.post(
          `/comments/reply`,
          {
            params: {
              eventId: eventId,
              parentId: parentId
            }
          },
          comment
        )
      ).data
    } catch (err) {
      console.log('error posting reply: ', err)
    }

    return edited
  },
  deleteReplyFromComment: async function(eventId, parentId, index) {
    console.log('postReplyInComment')

    let edited
    try {
      edited = (
        await api.delete(`/comments/reply`, {
          params: {
            eventId: eventId,
            parentId: parentId,
            index: index
          }
        })
      ).data
    } catch (err) {
      console.log('error deleting reply: ', err)
    }

    return edited
  },
  editReplyFromComment: async function(eventId, parentId, index, text) {
    console.log('editReplyFromComment')

    let edited
    try {
      edited = (
        await api.delete(
          `/comments/reply`,
          {
            params: {
              eventId: eventId,
              parentId: parentId,
              index: index
            }
          },
          { text: text }
        )
      ).data
    } catch (err) {
      console.log('error editing reply: ', err)
    }

    return edited
  }
}