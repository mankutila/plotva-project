const initialState = {
  message: '',
  roomId: null,
  roomMessages: []
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPEND_MESSAGES':
      return {
        ...state,
        roomMessages: action.messages
      };
    case 'SET_MESSAGES':
      return {
        ...state,
        roomMessages: action.messages
      };

    default:
      return state;
  }
};
