import { configureStore, createSlice } from '@reduxjs/toolkit';

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {
    nome: '',
    logado: false,
  },
  reducers: {
    login: (state, action) => {
      state.nome = action.payload;
      state.logado = true;
    },
    logout: (state) => {
      state.nome = '';
      state.logado = false;
    }
  }
});

export const { login, logout } = usuarioSlice.actions;

const store = configureStore({
  reducer: {
    usuario: usuarioSlice.reducer
  }
});

export default store;
