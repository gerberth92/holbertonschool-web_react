import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer  from '../Footer/Footer';
import Login from '../Login/Login';
import './App.css';

export default function App() {
return (
  <>
    <div className='root-notifications'>
      <Notifications />
    </div>
    <div className='App'>
      <Header />
      <Login />
      <Footer />
    </div>
  </>
);
}
