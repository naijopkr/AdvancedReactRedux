import { combineReducers } from 'redux'
import commentsReducer from './comments'
import authRedudcer from './auth'

export default combineReducers({
  comments: commentsReducer,
  auth: authRedudcer
})