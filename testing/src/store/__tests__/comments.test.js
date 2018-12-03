import commentsReducer from '../reducers/comments'
import * as actions from '../actions/comments'
import { SAVE_COMMENT } from '../actions/types'

describe('saveComment', () => {
  const COMMENT = 'Hello world'

  it('should handle actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: COMMENT
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual([COMMENT])
  })

  it('should have the correct type', () => {
    const action = actions.saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('should have the correct payload', () => {
    const action = actions.saveComment(COMMENT)

    expect(action.payload).toEqual(COMMENT)
  })
})