import { View, Text, StyleSheet } from 'react-native';
 
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6FFF9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#009B30',
  },
});