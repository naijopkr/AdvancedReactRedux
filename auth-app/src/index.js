import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App'
import Welcome from './components/cover/Welcome'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const app = (
  <BrowserRouter>
    <App>
      <Route path='/' exact component={Welcome} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
    </App>
  </BrowserRouter>
)

ReactDOM.render(app, document.querySelector('#root'))