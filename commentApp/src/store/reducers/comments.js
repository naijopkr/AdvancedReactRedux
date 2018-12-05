import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types'

const initialState = []

const saveComment = (state, action) => {
  return [...state, action.payload]
}

const fetchComments = (state, action) => {
  const comments = action.payload.data.map(comment => comment.body)
  return [...state, ...comments]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return saveComment(state, action)
    case FETCH_COMMENTS:
      return fetchComments(state, action)
    default: 
      return state
  }
}

export default reducer