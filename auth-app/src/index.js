import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './store/reducers'

import App from './components/App'
import Welcome from './components/cover/Welcome'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Feature from './components/feature/Feature'
import SignOut from './components/auth/SignOut'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers, 
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/feature' component={Feature} />
        <Route path='/signout' component={SignOut} />
      </App>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.querySelector('#root'))