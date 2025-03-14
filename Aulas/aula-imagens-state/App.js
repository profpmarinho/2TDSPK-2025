import { StyleSheet, Image, View } from 'react-native';

export default function App() {
  const imagem = 'https://www.fiap.com.br/wp-content/themes/fiap2016/images/sharing/fiap.png'
  return (
    <View style={styles.container}>
      <Image style={styles.imgcover}
       source={{uri: imagem }} />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add any container styles if needed
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'top',
  },
  imgcover: {
    marginTop: 50,
    width: '100px',
    height: '100px', // Uncommented and added height
    resizeMode: 'cover' // Corrected property name
  },
  imgcontains: {
    width: '100px', // Added unit
    height: '100px',
    resizeMode: 'contain' // Changed to a valid resizeMode value
  },
  imgstretch: {
    width: '140px',
    height: '230px', // Corrected height value
    resizeMode: 'stretch'
  },
  imgrepeat: {
    width: '100px',
    height: '100px', // Uncommented and added height
    resizeMode: 'repeat'
  },
  imgcenter: {
    width: '100px',
    height: '100px',
    resizeMode: 'center'
  }
});