import React from 'react';
import { shallow } from 'enzyme';
import Dashbord from '../../src/components/Dashbord';

describe('Dashboard Component', () => {
  it('Should render the Dashboard title', () => {
    const wrapper = shallow(<Dashbord />);
    const title = wrapper.find('[data-testDashTitle="dashboard-title"]');
    expect(title.text()).toBe('Dashbord');
  });
});