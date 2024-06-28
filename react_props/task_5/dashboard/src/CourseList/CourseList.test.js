import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find('CourseListRow');
    expect(rows).toHaveLength(5);
  });

  it('renders correctly with an empty listCourses array or without listCourses property', () => {
    let wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.exists()).toBe(true);

    wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of CourseListRow when listCourses is passed', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const expectedRows = 2 + courses.length;
    expect(wrapper.find('tbody tr')).toHaveLength(expectedRows);
  });
});
