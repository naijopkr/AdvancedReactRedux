import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'
import CommentBox from '../CommentBox/CommentBox'
import CommentList from '../CommentList/CommentList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('should show a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('should show a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})