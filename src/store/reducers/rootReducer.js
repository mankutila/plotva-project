import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import { messageReducer } from './messageReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  messages: messageReducer
})