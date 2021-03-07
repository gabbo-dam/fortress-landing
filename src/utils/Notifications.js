import { toast } from 'react-toastify'; // Notification message container

export const showNotification = (message, type, timeOut) => { //eslint-disable-line
  toast(`${message}`, {
    type, // allowed types ["info","success","warning","error","default"]
    autoClose: timeOut,
  });
};

