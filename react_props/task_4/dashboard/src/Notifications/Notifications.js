import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  const [displayDrawer, setdisplayDrawer] = useState(false);

  return (
    <>
      <div className='menuItem'>
        Your notifications
      </div>
      {displayDrawer && <div className='Notifications'>
        <button style={{
          position: 'absolute',
          right: 0,
        }}
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
        >x</button>
        <p>
          Here is the list of notifications
        </p>
        <ul>
          <NotificationItem type='default' value='New course available' />
          <NotificationItem type='urgent' value='New resume available' />
          <NotificationItem type='urgent' html={{ __html:getLatestNotification() }} />
        </ul>
      </div>}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
