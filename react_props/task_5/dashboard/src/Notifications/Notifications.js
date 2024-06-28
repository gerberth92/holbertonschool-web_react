import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';

export default function Notifications({listNotifications=[]}) {
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
          {listNotifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            listNotifications.map((info) => (
              <NotificationItem key={info.id} type={info.type} html={info.html} value={info.value} />
            ))
          )}
        </ul>
      </div>}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
