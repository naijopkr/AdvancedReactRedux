import React, { Component } from 'react'
import { connect } from 'react-redux'

const requireAuth = ChildComponent => {
  class ComposedComponent extends Component {
    shouldRedirect = () => {
      if (!this.props.auth.isAuthenticated) {
        this.props.history.push('/')
      }
    }
    
    componentDidMount = () => {
      this.shouldRedirect()
    }

    componentDidUpdate = () => {
      this.shouldRedirect()
    }
    
    render = () => {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent)
}

export default requireAuth