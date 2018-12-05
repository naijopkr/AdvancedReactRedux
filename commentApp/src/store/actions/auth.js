import * as types from './types'

export const changeAuth = isAuth => {
  return { 
    type: types.CHANGE_AUTH,
    payload: isAuth 
  }
}