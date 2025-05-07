import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './src/store/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Login" onPress={() => dispatch(setUser({ name: 'Leticia', email: 'leticia@email.com' }))} />
      <Button title="Logout" onPress={() => dispatch(clearUser())} />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}