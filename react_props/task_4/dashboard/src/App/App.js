import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer  from '../Footer/Footer';
import Login from '../Login/Login';
import './App.css';
import CourseList from '../CourseList/CourseList';

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

