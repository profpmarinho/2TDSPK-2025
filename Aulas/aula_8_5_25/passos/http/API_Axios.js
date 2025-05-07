import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1')
      .then(response => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Text>{item.first_name} {item.last_name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
};

export default App;