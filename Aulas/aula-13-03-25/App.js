import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Componente principal do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
      {/* Renderiza o componente Classe */}
      <Classe name="User" />
    </View>
  );
}

// Estilos para o componente principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Componente de classe que estende React.PureComponent
class Classe extends React.PureComponent {
  // Estado inicial do componente
  state = {
    titleText: 'Ninguem apertou o botao'
  }

  // Função chamada quando o botão é pressionado
  onPressButton = (name) => {
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`;
    this.setState({ titleText: `Botao pressionado por ${name} as ${timeString}` });
  }

  // Renderiza o componente
  render() {
    return (
      <View>
        {/* Exibe o texto do estado */}
        <Text>
          {this.state.titleText}
        </Text>
        {/* Botão que chama a função onPressButton ao ser pressionado */}
        <Button title='Stop capturing'
          onPress={() => this.onPressButton(this.props.name)}
          color='#FF0000'>
        </Button>
      </View>
    );
  }
}