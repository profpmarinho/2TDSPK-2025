import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Classe name="User" />
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

const Classe = (props) => {
    const [titleText, setTitleText] = React.useState('Ninguem pressionou o botao');

    const onPressButton = (name) => {
        setTitleText(`Botao pressionado por ${name}`);
    };

    return (
      <View>
        <Text>
        {titleText}
        </Text>
        <Button title='Stop capturing'
        onPress={() => onPressButton(props.name)}
        color='#FF0000'></Button>
      </View>
    );
}