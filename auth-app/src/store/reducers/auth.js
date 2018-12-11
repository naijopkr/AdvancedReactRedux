import * as actionTypes from '../actions/types'

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
}

const authUser = (state, action) => {
  return {
    ...state,
    authenticated: action.payload.token
  }
}

const authError = (state, action) => {
  return {
    ...state,
    errorMessage: action.payload.error
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (actionTypes.AUTH_USER):
      return authUser(state, action)
    case (actionTypes.AUTH_ERROR):
      return authError(state, action)
    default: 
      return state
  }
}

export default reducer