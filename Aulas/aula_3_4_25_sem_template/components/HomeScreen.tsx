import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  const handleSave = () => {
    setSavedName(name);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <Button title="Save" onPress={handleSave} />
      {savedName ? <Text>Hello, {savedName}</Text> : null}
    </View>
  );
};

export default HomeScreen;