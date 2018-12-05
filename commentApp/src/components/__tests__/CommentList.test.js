import React from 'react'
import { mount } from 'enzyme'

import CommentList from '../CommentList/CommentList'
import Root from '../../Root'

let wrapped

const commentArray = ['Comment1', 'Comment2']

beforeEach(() => {
  const initialState = {
    comments: commentArray
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('should create one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(commentArray.length)
})

it('should show the comment text', () => {
  commentArray.forEach(comment => {
    expect(wrapped.render().text()).toContain(comment)
  })
})