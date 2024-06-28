import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });

  describe('when isLoggedIn is true', () => {
    it('does not include the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find('Login').exists()).toBe(false);
    });

    it('includes the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find('CourseList').exists()).toBe(true);
    });
  });
});
