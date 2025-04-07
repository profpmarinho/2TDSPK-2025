import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Image, Text, View } from 'react-native';

export default function App() {
  number = 0
  const[nomeInput, changeNome] = useState('')
  const[sobrenomeInput, changeSobrenome] = useState('')

  const validateString = (txt, func) => {
    const regex = /^[a-zA-Z\s]*$/
    if (regex.test(txt)) {
      func(txt)
    }
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8ReTG9GzXbcUG5Xoysu8O-PAEmdK3tTQghQ_rPM7U3RNL08-u1XNhRjF&s=10' }} 
        style={{ width: 200, height: 200 }} // Add style to define image dimensions
    ></Image>
      
      <TextInput
        onChangeText={(txt) => validateString(txt, changeNome)}
        value={nomeInput}
        placeholder="Nome"
      />
      <TextInput
        onChangeText={(txt) => validateString(txt, changeSobrenome)}
        value={sobrenomeInput}
        placeholder="Sobrenome"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
