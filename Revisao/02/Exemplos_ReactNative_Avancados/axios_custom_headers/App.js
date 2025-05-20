import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      try {
        const resposta = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token_exemplo'
          }
        });
        setDados(resposta.data.slice(0, 5));
      } catch (e) {
        console.error('Erro com axios:', e);
      }
    };

    carregar();
  }, []);

  return (
    <FlatList
      data={dados}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
}
