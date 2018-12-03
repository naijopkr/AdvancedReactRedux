import * as types from './types'

export const saveComment = comment => {
  return ({ 
    action: types.SAVE_COMMENT, 
    payload: comment 
  })
}
