import * as types from './types'

export const saveComment = comment => {
  return ({ 
    type: types.SAVE_COMMENT, 
    payload: comment 
  })
}
