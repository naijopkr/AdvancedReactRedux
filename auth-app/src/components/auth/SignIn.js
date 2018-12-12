import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'

class SignIn extends Component {
  handleSubmit = evt => {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    const user = {
      email,
      password
    }
    this.props.signin(user, () => {
      this.props.history.push('/feature')
    })
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>Email</label>
          <input 
            name='email'
            type='text'
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            name='password'
            type='password'
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage }
}

export default connect(mapStateToProps, actions)(SignIn)