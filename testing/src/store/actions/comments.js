import * as types from './types'
import axios from 'axios'

export const saveComment = comment => {
  return ({ 
    type: types.SAVE_COMMENT, 
    payload: comment 
  })
}

export const fetchComments = () => {
  const res = axios.get('http://jsonplaceholder.typicode.com/comments')

  return {
    type: types.FETCH_COMMENTS,
    payload: res
  }
}
