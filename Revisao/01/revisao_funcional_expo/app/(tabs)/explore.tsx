import { SafeAreaView, StyleSheet } from 'react-native';

import { Ranking } from './Ranking';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Ranking />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});