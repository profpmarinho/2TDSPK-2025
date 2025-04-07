import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const DetailsScreen = () => {
  const handleImagePress = () => {
    Alert.alert('Image Clicked', 'You clicked the image!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={{ uri: 'https://placehold.co/600x400?text=Hello+World' }} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;