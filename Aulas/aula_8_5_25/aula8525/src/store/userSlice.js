import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [], // Store user data here
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload; // Update user data
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;