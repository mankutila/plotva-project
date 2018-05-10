import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import { messageReducer } from './messageReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  messages: messageReducer,
  app: appReducer
})