import { SAVE_COMMENT } from '../actions/types'

const initialState = []

const saveComment = (state, action) => {
  return [...state, action.payload]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return saveComment(state, action)
    default: 
      return state
  }
}

export default reducer