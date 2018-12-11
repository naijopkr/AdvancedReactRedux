import axios from 'axios'
import * as actionTypes from './types'

export const signup = user => async dispatch => {
  const res = await axios.post('http://localhost:5000/signup', user)
  dispatch({ type: actionTypes.AUTH_USER, payload: res.data })
}