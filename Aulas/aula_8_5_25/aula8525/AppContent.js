import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUsers } from './src/store/userSlice'; // Import the Redux action

const AppContent = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users); // Get users from Redux state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    })
      .then(response => {
        dispatch(setUsers(response.data.data)); // Save data to Redux
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, [dispatch]);

  if (loading && users.length === 0) {
    return <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userCard: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
});

export default AppContent;