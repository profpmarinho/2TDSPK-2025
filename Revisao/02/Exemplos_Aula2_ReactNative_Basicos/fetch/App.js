import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const buscar = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await resp.json();
      setDados(json.slice(0, 5));
    };
    buscar();
  }, []);

  return (
    <FlatList
      data={dados}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
}
