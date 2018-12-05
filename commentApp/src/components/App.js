import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../store/actions'

import CommentBox from './CommentBox/CommentBox'
import CommentList from './CommentList/CommentList'

class App extends Component {
  renderButton = () => {
    const { isAuthenticated } = this.props.auth
    const label = isAuthenticated ? 'Sign Out' : 'Sign In'
    return (
      <button 
        onClick={() => this.props.changeAuth(!isAuthenticated)}>
        {label}
      </button>
    )
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render = () => {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App)