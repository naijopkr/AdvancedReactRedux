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

describe('the text area', () => {
  const comment = {
    target: {
      value: 'Hello world!'
    }
  }
  
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', comment)
    wrapped.update()
  })
  it('should have a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(comment.target.value)
  })

  it('should empty the textarea when form is submited', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})