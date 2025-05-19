import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth ,db } from './firebaseConfig';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Add name state
  const [error, setError] = useState('');
  const [user,setUser] = useState(null);

  const login = async () => {
    try {
      tmpuser = await signInWithEmailAndPassword(auth, email, password);
      console.log(tmpuser);
      setUser(tmpuser.user);
      await lerDadosUsuario(tmpuser.user.uid);
      setError('');
    } catch (e) {
      setError(e.message);
    }
  };

  const registerUser = async () => { // No parameters, use state
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user)
      await updateProfile(user, { displayName: name });
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
    const lerDadosUsuario = async (userId, ) => {
        const docRef = doc(db, "usuarios", dados.uid); 
        return getDoc(docRef) .then(
            (snap) => { 
                if (!snap.exists()) throw new Error("not-found"); 
    // document missing 
                return snap.data(); 
                setError(null);
            });
    };



    //EXEMPLO DE QUERY
    /*
    async function buscarUsuariosPorDisplayName(displayName) {
      const usuariosRef = collection(db, 'usuarios');
      const q = query(usuariosRef, where('displayName', '==', displayName));
      const querySnapshot = await getDocs(q);

      const usuarios = [];
      querySnapshot.forEach((doc) => {
        usuarios.push({ id: doc.id, ...doc.data() });
      });
      return usuarios;
}
  */
  return (
    <View>
        <View>
<TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
      <Button title="Signup" onPress={registerUser} />
      {error ? <Text>{error}</Text> : null}
        </View>
        <View>
            {user ? (
                <Text>Bem-vindo, {user.displayName || user.email}!</Text>
            ) : (
                <Text>Faça login ou crie uma conta.</Text>
            )}
        </View>
      
    </View>
  );
}