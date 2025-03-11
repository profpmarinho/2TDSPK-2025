import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Classe />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Classe extends React.PureComponent {
    state = {
        titleText : 'Ninguem apertou o botao'
    }
    onPressButton = (name) => {
        this.setState({titleText: `Botao pressionado por ${name}`})
    }
  render() {
    return (
      <View>
        <Text>
        {this.state.titleText}
        </Text>
        <Button title='Stop capturing'
        onPress={() => this.onPressButton(this.props.name)}
        color='#FF0000'></Button>
      </View>
    );
  }
}