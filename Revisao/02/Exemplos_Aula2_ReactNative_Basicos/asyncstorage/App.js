import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [salvo, setSalvo] = useState('');

  useEffect(() => {
    const carregar = async () => {
      const valor = await AsyncStorage.getItem('nome');
      if (valor) setSalvo(valor);
    };
    carregar();
  }, []);

  const salvar = async () => {
    await AsyncStorage.setItem('nome', nome);
    setSalvo(nome);
    setNome('');
  };

  return (
    <View>
      <TextInput placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
      <Button title="Salvar" onPress={salvar} />
      <Text>Nome salvo: {salvo}</Text>
    </View>
  );
}
