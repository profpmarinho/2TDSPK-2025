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

// LoginScreen.js (exemplo simplificado de login)
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
