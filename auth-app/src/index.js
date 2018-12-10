import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './store/reducers'

import App from './components/App'
import Welcome from './components/cover/Welcome'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const store = createStore(reducers, {})

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </App>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.querySelector('#root'))