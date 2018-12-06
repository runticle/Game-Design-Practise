import React from 'react'
import { shallow } from 'enzyme'

import {Messages} from '../features/messages/index'

describe('Messages', () => {
  describe('Messages', () => {
    it('should render correctly', () => {

      const messages = shallow(<Messages />)

      expect(messages).toMatchSnapshot()
    })
  })
})
