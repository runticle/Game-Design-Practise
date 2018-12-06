import React from 'react'
import { shallow } from 'enzyme'

import {Dashboard, Rubies} from '../features/dashboard/index'
import { Inventory } from '../features/inventory/index'
import {Messages} from '../features/messages/index'

describe('Dashboard', () => {
  describe('Dashboard', () => {

    it('should render correctly', () => {
      let props
      const dashboard = shallow(<Dashboard props={props}/>)

      expect(dashboard.find('div').length).toEqual(1)
      expect(dashboard).toMatchSnapshot()
    })

    it('should render an Inventory', () => {
      let props
      const dashboard = shallow(<Dashboard props={props}/>)

      expect(dashboard.containsMatchingElement(<Inventory />)).toEqual(true);
    })

    it('should render Rubies', () => {
      let props
      const dashboard = shallow(<Dashboard props={props}/>)

      expect(dashboard.containsMatchingElement(<Rubies />)).toEqual(true);
    })

    it('should render Messages', () => {
      let props
      const dashboard = shallow(<Dashboard props={props}/>)

      expect(dashboard.containsMatchingElement(<Messages />)).toEqual(true);
    })

  })
})
