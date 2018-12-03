import React from 'react'
import { mount } from 'enzyme'

import CommentBox from '../CommentBox/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('should have a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

it('should have a textarea that users can type in', () => {
  wrapped.find('textarea').simulate('change', { 
    target: { value: 'Hello world!' } 
  })
  wrapped.update()
})