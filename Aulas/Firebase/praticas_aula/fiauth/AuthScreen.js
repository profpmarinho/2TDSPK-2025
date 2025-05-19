import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth ,db } from './firebaseConfig';
import {  doc,  setDoc } from 'firebase/firestore';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState(''); // Add name state
  const [error, setError] = useState('');
  const [user,setUser] = useState(null);
  const login = async () => {
    try {
      tmpuser = await signInWithEmailAndPassword(auth, email, password);
      console.log(tmpuser);
     
      setError('');
    } catch (e) {
      setError(e.message);
    }
  };
  const registerUser = async () => { // No parameters, use state
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user)
      await updateProfile(user, { displayName: displayName });
      setUser(user);
      salvarDadosUsuario(user.uid,user);
    } catch (e) {
      setError(e.message);
    }
  };
  const salvarDadosUsuario = async (userId, dados) => {
    setUser(await setDoc(doc(db, 'usuarios', dados.uid), { 
            'displayName': dados.displayName,
            'email': dados.email,
            'userId': dados.uid
        }));
};

  const lerDadosdeUsuarios = async () => {
  }
  return (
    <View>
        <View>
            <Text>Bem Vindo</Text><TextInput placeholder="DisplayName" value={displayName} onChangeText={setDisplayName} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Login" onPress={login} />
            <Button title="SignUp" onPress={registerUser} />
        </View>
        <View>
            {error ? <Text>{error}</Text> : null}
            {user ? (
                <Text>Bem-vindo, {user.displayName || user.email}!</Text>
            ) : (
                <Text>Faça login ou crie uma conta.</Text>
            )}
        </View>
    </View>
    )
}