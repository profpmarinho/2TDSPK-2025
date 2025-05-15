import React from 'react';
import { Button, View, Text } from 'react-native';
import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';

export default function UploadExample() {
  const localFilePath = `${RNFS.DocumentDirectoryPath}/exemplo.txt`; // arquivo fixo
  const remotePath = 'uploads/meuarquivo.txt'; // caminho no Firebase

  const uploadArquivo = async () => {
    try {
      // Garante que o arquivo exista (para o exemplo)
      await RNFS.writeFile(localFilePath, 'Conteúdo de teste do arquivo.', 'utf8');

      const reference = storage().ref(remotePath);
      await reference.putFile(localFilePath);
      alert('Arquivo enviado com sucesso!');
    } catch (e) {
      console.error('Erro no upload:', e);
    }
  };

  return (
    <View>
      <Button title="Upload de arquivo fixo" onPress={uploadArquivo} />
    </View>
  );
}
