// HomeScreen.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PizzaItem from '../components/PizzaItem';

export default function HomeScreen({ pizzas }) {
  const renderItem = ({ item }) => <PizzaItem pizza={item} />;

  return (
    <FlatList
      data={pizzas}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
});