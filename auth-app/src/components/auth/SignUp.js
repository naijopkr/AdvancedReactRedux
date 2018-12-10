import React, { Component } from 'react'

class SignUp extends Component {
  handleSubmit = evt => {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    const user = {
      email,
      password
    }
    console.log(user)
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
        <button>Enviar</button>
      </form>
    )
  }
}

export default SignUp