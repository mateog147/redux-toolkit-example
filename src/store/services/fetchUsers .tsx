import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserData} from '../../interfaces/UserData';

export const fetchUsers: any = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://reqres.in/api/users?delay=1');
    return (await response.json()).data as UserData[];
  },
);
