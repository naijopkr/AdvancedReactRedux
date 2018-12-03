import commentsReducer from '../reducers/comments'
import { SAVE_COMMENT } from '../actions/types'

const COMMENT = 'Hello world'

it('should handle actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: COMMENT
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual([COMMENT])
})