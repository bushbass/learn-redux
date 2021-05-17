import { createStore } from 'redux';
import { messageReducer } from './Messages/messageReducer';
export const store = createStore(messageReducer);
