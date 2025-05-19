import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100;
    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(imc.toFixed(2).toString);
    } else {
      setResultado('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC Expo</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Altura (cm)"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && <Text style={styles.resultado}>Seu IMC é {resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  titulo: {
    fontSize: 24, marginBottom: 20, fontWeight: 'bold',
  },
  input: {
    width: '80%', borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5,
  },
  resultado: {
    marginTop: 20, fontSize: 20, color: '#333',
  },
});
