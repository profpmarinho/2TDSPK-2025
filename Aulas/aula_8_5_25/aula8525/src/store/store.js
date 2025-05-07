// filepath: /Users/ozymandias/git/2TDSPK-2025/Aulas/aula_8_5_25/aula8525/src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };