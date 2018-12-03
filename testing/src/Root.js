import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './store/reducers'

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  )
}