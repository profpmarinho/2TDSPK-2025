import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token_exemplo'
          }
        });
        const json = await resp.json();
        setPosts(json.slice(0, 5));
      } catch (e) {
        console.error('Erro ao buscar dados:', e);
      }
    };

    carregar();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
}
