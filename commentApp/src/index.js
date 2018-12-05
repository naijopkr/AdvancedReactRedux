import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

import App from './components/App'

const app = (
  <Root>
    <App />
  </Root>
)

ReactDOM.render(
  app,
  document.querySelector('#root')
)