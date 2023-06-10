import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from './Notification.module.css';

const Notification = () => {
  const message = useSelector(state => state.notification.message);

  return <p className={s.title}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
