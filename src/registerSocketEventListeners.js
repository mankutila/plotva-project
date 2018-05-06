import api from './api';
// import { appendMessages } from './store/actions/messagesActions';

export const registerSocketEventListeners = async store => {
  console.log('eventlisteners');
  await api.onMessage(result => {
    console.log('AAAeventlisteners', result);

    /*new Notification('New message', {
      body: result.message,
      icon: '/favicon.ico',
    });*/

    store.dispatch({
      type: 'APPEND_MESSAGE',
      roomId: result.roomId,
      message: result.message
    });
  });
};
