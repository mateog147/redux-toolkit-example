import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './reducers/message';

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
