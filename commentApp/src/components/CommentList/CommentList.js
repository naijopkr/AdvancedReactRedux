import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  renderComments = () => {
    const commentList = this.props.comments.map((comment, index) => {
      return (
        <li key={index}>
          {comment}
        </li>
      )
    })

    return commentList
  }
  
  render = () => {
    return (
      <div>
        <h4>Comments</h4>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)