import React, { Component } from 'react'
import requireAuth from '../HOC/requireAuth'

class Feature extends Component {
  render = () => (
    <div>This is the feature!</div>
  )
}

export default requireAuth(Feature)