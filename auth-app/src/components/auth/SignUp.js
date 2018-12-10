import React, { Component } from 'react'

class SignUp extends Component {
  render = () => {
    return (
      <form>
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
      </form>
    )
  }
}

export default SignUp