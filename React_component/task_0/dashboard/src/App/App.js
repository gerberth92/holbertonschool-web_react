import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import './App.css';
import CourseList from '../CourseList/CourseList';

export default class App extends Component {
  render() {
    const { isLoggedIn = false } = this.props;
    const listCourses = [
      {
        id: 1, name: 'ES6', credit: 60,
      },
      {
        id: 2, name: 'Webpack', credit: 20,
      },
      {
        id: 3, name: 'React', credit: 40,
      },
    ];

    const listNotifications = [
      {
        id: 1, type: 'default', value: 'New course available',
      },
      {
        id: 2, type: 'urgent', value: 'New resume available',
      },
      {
        id: 3,
        html: {
          __html: '<strong>Urgent requirement</strong> - complete by EOD',
        },
        type: 'urgent',
      },
    ];

    return (
      <>
        <div className='root-notifications'>
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className='App'>
          <Header />
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
