import { userReducer } from '../userReducer';

describe('Redux: User Reducer', () => {
  it('should return initial state with given an empty action', () => {
    const initialState = {
      user: null,
      selectedUsers: []
    }
    expect(userReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SET_USER action', () => {
    const user = {
      _id: '123',
      name: 'Test Test',
      email: 'test@redux.com',
      phone: '533-802-3815',
    };
    const userAction = {
      type: 'SET_USER',
      user
    };
    expect(userReducer({}, userAction)).toEqual({user});
  });
  it('should handle SET_SELECTED_USER action', () => {
    const users = [
      {
        _id: '123',
        name: 'Test Test',
        email: 'test@redux.com',
        phone: '533-802-3815',
      },
      {
        _id: '456',
        name: 'Test1',
        email: 'test1@redux.com',
        phone: '123546789',
      }
    ];
    const userAction = {
      type: 'SET_SELECTED_USER',
      selectedUsers: users
    };
    expect(userReducer({}, userAction)).toEqual({ selectedUsers: users });
  });
});
