import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { remoteConfig } from './firebaseConfig';
import { fetchAndActivate, getValue, setDefaultConfig } from 'firebase/remote-config';

export default function AppWarning() {
  const [loading, setLoading] = useState(true);
  const [floodWarning, setFloodWarning] = useState(false);
  const [error, setError] = useState(null);

  const loadConfig = async () => {
    try {
      // Set default config first
      const defaults = {
        floodWarning: 'false'
      };
      
      //await setDefaultConfig(remoteConfig, defaults);

      // Configure settings with higher timeout
      remoteConfig.settings = {
        minimumFetchIntervalMillis: 6000, // 1 minute
        fetchTimeoutMillis: 3000, // 30 seconds
      };

      // Fetch and activate config
      await fetchAndActivate(remoteConfig);
      const flag = getValue(remoteConfig, 'floodWarning').asString();
      setFloodWarning(flag === 'true');
      setError(null);
    } catch (e) {
      console.warn('Remote Config failed:', e);
      setError('Unable to fetch remote configuration');
      // Fallback to default value
      setFloodWarning(false);
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
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
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
