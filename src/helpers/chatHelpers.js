import api from '../api'

async function getChatName(chatMembers = [], chatNameFromDb = '', currentUser = {}) {
  let chatName = '';
  if (chatMembers.length > 2) {
    chatName = 'Group chat';
  } else {
    const visibleId = chatNameFromDb.split(', ').filter((name) => name !== currentUser._id)[0];
    try {
      const partner = await api.getUser(visibleId);
      chatName = partner.name;
    } catch (err) {
      console.log(err);
    }
  }
  return chatName;
}

function formatTime(time) {
  const hours = '0' + time.getHours();
  const minutes = '0' + time.getMinutes();
  return `${hours.slice(-2)}:${minutes.slice(-2)}`;
}

export { getChatName, formatTime };