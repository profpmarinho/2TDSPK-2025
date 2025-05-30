import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      return { name: '', email: '' };
    }
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;