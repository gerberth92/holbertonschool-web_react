import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type='default', html, value }) => {
  let content = value;

  try {
    if (html) {
      content = <span dangerouslySetInnerHTML={html} />;
    }
  } catch (error) {
    console.error('Error in NotificationItem:', error);
    content = <span>Error rendering HTML content</span>;
  }

  return (
    <li data-notification-type={type}>
      {content}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string
};


export default NotificationItem;
