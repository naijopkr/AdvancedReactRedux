import axios from 'axios'
import * as actionTypes from './types'

export const signup = (user, callback) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/signup', user)
    dispatch({ type: actionTypes.AUTH_USER, payload: res.data })
    callback()
  } catch (err) {
    const { data } = err.response
    dispatch({ type: actionTypes.AUTH_ERROR, payload: data })
  }
}

export const signout = () => {
  return { type: actionTypes.AUTH_USER, payload: '' }
}