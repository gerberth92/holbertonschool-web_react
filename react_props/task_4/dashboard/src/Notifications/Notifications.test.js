import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('<Notifications /> renders the first <NotificationItem /> element with the right HTML', () => {
    const expectedHtml = '<li data-notification-type="default">New course available</li>';
    const primerNotificationItem = wrapper.find(NotificationItem).first();
    expect(primerNotificationItem.html()).toEqual(expectedHtml);
  });

  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toContain('Here is the list of notifications');
  });

  it('displays the menu item when displayDrawer is false', () => {
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('displays the menu item when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});
