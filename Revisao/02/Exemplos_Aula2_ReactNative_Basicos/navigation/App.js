import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function TelaHome({ navigation }) {
  return (
    <View>
      <Text>Tela Inicial</Text>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Detalhes', { nome: 'Letícia' })} />
    </View>
  );
}

function TelaDetalhes({ route }) {
  return (
    <View>
      <Text>Olá, {route.params.nome}!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
