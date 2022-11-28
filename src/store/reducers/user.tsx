import {createSlice} from '@reduxjs/toolkit';
import {UserData} from '../../interfaces/UserData';
import {fetchUsers} from '../services/fetchUsers ';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as UserData[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
