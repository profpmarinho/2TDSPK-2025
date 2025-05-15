import React, { useState } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import storage from '@react-native-firebase/storage';

export default function ListaArquivos() {
  const [arquivos, setArquivos] = useState([]);

  const listarArquivos = async () => {
    try {
      const listResult = await storage().ref('uploads').listAll();
      const nomes = listResult.items.map((ref) => ref.name);
      setArquivos(nomes);
    } catch (e) {
      console.error('Erro ao listar:', e);
    }
  };

  return (
    <View>
      <Button title="Listar arquivos de /uploads" onPress={listarArquivos} />
      <ScrollView>{arquivos.map((nome, i) => <Text key={i}>{nome}</Text>)}</ScrollView>
    </View>
  );
}
