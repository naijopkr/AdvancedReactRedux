import * as types from '../actions/types'

const initialState = { isAuthenticated: false }

const changeAuth = (state, action) => {
  return {
    ...state,
    isAuthenticated: action.payload
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_AUTH:
      return changeAuth(state, action)
    default:
      return state
  }
}

export default reducer