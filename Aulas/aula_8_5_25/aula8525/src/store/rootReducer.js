// filepath: /Users/ozymandias/git/2TDSPK-2025/Aulas/aula_8_5_25/aula8525/src/store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import userReducer from './userSlice';

const userPersistConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;