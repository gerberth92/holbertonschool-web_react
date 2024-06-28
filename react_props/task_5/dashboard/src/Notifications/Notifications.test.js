import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];
    wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('<Notifications /> renders the first <NotificationItem /> element with the right HTML', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' }
    ];
    wrapper = shallow(<Notifications listNotifications={notifications} />);
    const expectedHtml = '<li data-notification-type="default">New course available</li>';
    const primerNotificationItem = wrapper.find(NotificationItem).first();
    expect(primerNotificationItem.html()).toEqual(expectedHtml);
  });

  it('renders the text "Here is the list of notifications"', () => {
    wrapper.setProps({ displayDrawer: true });
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

  it('renders correctly with an empty listNotifications array or without listNotifications property', () => {
    wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.exists()).toBe(true);

    wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of NotificationItem when listNotifications is passed', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    wrapper = shallow(<Notifications listNotifications={notifications} displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(notifications.length);
  });

  it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
    wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
    expect(wrapper.find('p').text()).not.toContain('Here is the list of notifications');
    expect(wrapper.find('ul').text()).toContain('No new notification for now');
  });
});
