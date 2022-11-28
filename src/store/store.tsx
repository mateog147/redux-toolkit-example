import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './reducers/message';
import usersReducer from './reducers/user';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    users: usersReducer,
  },
});
