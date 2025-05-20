import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { incrementar, resetar } from './store';
import { View, Text, Button } from 'react-native';

function TelaContador() {
  const valor = useSelector(state => state.contador.valor);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Valor atual: {valor}</Text>
      <Button title="Incrementar" onPress={() => dispatch(incrementar())} />
      <Button title="Resetar" onPress={() => dispatch(resetar())} />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TelaContador />
    </Provider>
  );
}
