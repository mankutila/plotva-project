import api from './api';
// import { appendMessages } from './store/actions/messagesActions';

export const registerSocketEventListeners = async store => {
  await api.onMessage((message) => {
    store.dispatch({
      type: 'SET_MESSAGES',
      messages: [...store.getState().messages.roomMessages, message]
    })
  });

};
