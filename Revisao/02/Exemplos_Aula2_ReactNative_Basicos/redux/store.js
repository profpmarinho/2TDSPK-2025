import { configureStore, createSlice } from '@reduxjs/toolkit';

const contadorSlice = createSlice({
  name: 'contador',
  initialState: { valor: 0 },
  reducers: {
    incrementar: state => { state.valor += 1 },
    resetar: state => { state.valor = 0 },
  },
});

export const { incrementar, resetar } = contadorSlice.actions;

const store = configureStore({ reducer: { contador: contadorSlice.reducer } });
export default store;
