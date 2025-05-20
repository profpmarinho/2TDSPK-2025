import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { login, logout } from './store';
import { View, Text, Button } from 'react-native';

function LoginScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Fazer Login como Ana" onPress={() => dispatch(login('Ana'))} />
    </View>
  );
}

function ProfileScreen() {
  const usuario = useSelector(state => state.usuario);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Usuário: {usuario.nome}</Text>
      <Text>Status: {usuario.logado ? 'Logado' : 'Deslogado'}</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
}

export default function App() {
  const [tela, setTela] = React.useState('login');

  return (
    <Provider store={store}>
      <View style={{ marginTop: 50 }}>
        <Button title="Ir para Login" onPress={() => setTela('login')} />
        <Button title="Ir para Perfil" onPress={() => setTela('perfil')} />
        {tela === 'login' ? <LoginScreen /> : <ProfileScreen />}
      </View>
    </Provider>
  );
}
