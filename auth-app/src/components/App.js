import React, { Component } from 'react'

import Header from './header/Header'

class App extends Component {
  render = () => {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    )
  }
}

export default App