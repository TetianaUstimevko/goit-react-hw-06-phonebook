import s from './Notification.module.css';
import ProtoTypes from 'prop-types';

const Notification = ({ message }) => {
    return <p className={s.title}>{message}</p>;
};

Notification.protoType = {
    message: ProtoTypes.string.isRequired,
}

export default Notification;
