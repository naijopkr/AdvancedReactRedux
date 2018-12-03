import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './store/reducers'

import App from './components/App'

const app = (
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.querySelector('#root')
)