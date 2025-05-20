import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const buscar = async () => {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setDados(resp.data.slice(0, 5));
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
