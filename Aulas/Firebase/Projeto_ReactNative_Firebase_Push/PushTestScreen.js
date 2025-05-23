import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Clipboard } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function PushTestScreen() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        getToken();
      }
    };

    const getToken = async () => {
      const fcmToken = await messaging().getToken();
      setToken(fcmToken);
      console.log('Token FCM:', fcmToken);
    };

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('Notificação recebida!', JSON.stringify(remoteMessage.notification));
    });

    requestPermission();

    return unsubscribe;
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Token FCM:</Text>
      <Text selectable style={{ marginBottom: 20 }}>{token}</Text>
      <Button title="Copiar Token" onPress={() => Clipboard.setString(token)} />
    </View>
  );
}
