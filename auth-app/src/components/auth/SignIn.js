import React, { Component } from 'react'

class SignIn extends Component {
  render = () => {
    return (
      <form>
        <fieldset>
          <label>Email</label>
        </fieldset>
        <fieldset>
          <label>Password</label>
        </fieldset>
      </form>
    )
  }
}

export default SignIn