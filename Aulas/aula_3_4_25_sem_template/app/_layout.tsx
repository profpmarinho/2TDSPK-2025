import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const Tab = createBottomTabNavigator();

const RootLayout = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Details" component={DetailsScreen} />
  </Tab.Navigator>
);

export default RootLayout;
