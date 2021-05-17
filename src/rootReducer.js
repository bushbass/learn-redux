import { combineReducers } from 'redux';
import { messageReducer } from './messages/messageReducer';

export const rootReducer = combineReducers({
  messages: messageReducer,
});
