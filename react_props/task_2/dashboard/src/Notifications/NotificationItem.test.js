import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with dummy props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toBe('test');
  });

  it('renders with dummy html prop', () => {
    const wrapper = shallow(
      <NotificationItem
        type="urgent"
        html={{ __html: '<u>test</u>' }}
      />
    );
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
