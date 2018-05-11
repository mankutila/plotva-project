import { messageReducer } from '../messageReducer';

describe('Redux: Message Reducer', () => {
  it('should return initial state with given an empty action', () => {
    const initialState = {
      roomId: null,
      roomMessages: []
    }
    expect(messageReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle APPEND_MESSAGES action', () => {
    const messages = [
      {
        id: '123',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
      {
        id: '1234',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
    ];
    const messageAction = {
      type: 'APPEND_MESSAGES',
      messages
    };
    expect(messageReducer({}, messageAction)).toEqual({roomMessages: messages});
  });
  it('should handle RESET_MESSAGES action', () => {
    const messageAction = {
      type: 'RESET_MESSAGES'
    };
    expect(messageReducer({}, messageAction)).toEqual({ roomMessages: [] });
  });
});
