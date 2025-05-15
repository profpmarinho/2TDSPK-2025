// Estrutura dos exemplos dividida por aulas

// Aula 1 - Firebase Auth + Firestore

// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'seuapp.firebaseapp.com',
  projectId: 'seuapp',
  storageBucket: 'seuapp.appspot.com',
  messagingSenderId: '123456789',
  appId: 'seu-app-id',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}

// Firestore exemplo - salvar dados após cadastro
import { setDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const salvarDadosUsuario = async (userId, dados) => {
  await setDoc(doc(db, 'usuarios', userId), dados);
};


// Aula 2 - Firebase Storage, Analytics, Crashlytics, Remote Config

// Storage - Upload de imagem
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';

const uploadImage = async (userId) => {
  const result = await ImagePicker.launchImageLibraryAsync();
  if (!result.canceled) {
    const uri = result.assets[0].uri;
    const response = await fetch(uri);
    const blob = await response.blob();
    const storage = getStorage();
    const imageRef = ref(storage, `users/${userId}/profile.jpg`);
    await uploadBytes(imageRef, blob);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  }
};

// Analytics - Evento customizado
import analytics from '@react-native-firebase/analytics';

const logLoginEvent = async () => {
  await analytics().logEvent('login', {
    method: 'email',
  });
};

// Crashlytics - Captura de erro
import crashlytics from '@react-native-firebase/crashlytics';

const reportError = () => {
  try {
    throw new Error('Erro de teste!');
  } catch (error) {
    crashlytics().recordError(error);
  }
};

// Remote Config - Obter valor remoto
import remoteConfig from '@react-native-firebase/remote-config';

const fetchRemoteConfig = async () => {
  await remoteConfig().setDefaults({ welcome_message: 'Olá!' });
  await remoteConfig().fetchAndActivate();
  const msg = remoteConfig().getValue('welcome_message').asString();
  return msg;
};
