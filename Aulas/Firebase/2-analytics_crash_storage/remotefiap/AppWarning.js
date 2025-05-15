import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { remoteConfig } from './firebaseConfig';
import { fetchAndActivate, getValue } from 'firebase/remote-config';

export default function AppWarning() {
  const [loading, setLoading] = useState(true);
  const [floodWarning, setFloodWarning] = useState(false);

  const loadConfig = async () => {
    try {
      remoteConfig.settings = {
        minimumFetchIntervalMillis: 3600,
      };
      remoteConfig.defaultConfig = {
        floodWarning: 'false',
      };
      await fetchAndActivate(remoteConfig);
      const flag = getValue(remoteConfig, 'floodWarning').asString();
      setFloodWarning(flag === 'true');
    } catch (e) {
      console.warn('Remote Config failed:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfig();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading Remote Config...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, floodWarning ? styles.alert : styles.safe]}>
      <Text style={styles.text}>
        {floodWarning ? '⚠️ Flood Alert in São Paulo!' : '✅ Everything is OK in São Paulo'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    padding: 20,
  },
  alert: {
    backgroundColor: '#FFCCCC',
  },
  safe: {
    backgroundColor: '#CCFFCC',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  center: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
});
