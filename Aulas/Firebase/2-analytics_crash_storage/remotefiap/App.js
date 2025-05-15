import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';
import AppWarning from './AppWarning';

export default function App() {
   const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) return;
    setUploading(true);

    const response = await fetch(image);
    const blob = await response.blob();
    const filename = image.substring(image.lastIndexOf('/') + 1);
    const storageRef = ref(storage, `uploads/${filename}`);

    try {
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);
      Alert.alert('Upload Successful', `File available at: ${url}`);
    } catch (error) {
      console.error(error);
      Alert.alert('Upload Failed', error.message);
    }

    setUploading(false);
  };

  return (
    <View style={styles.container}>
      <AppWarning />
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Upload to Firebase" onPress={uploadImage} disabled={uploading} />
      {uploading && <ActivityIndicator size="large" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20,
  },
  image: {
    width: 300, height: 300, marginVertical: 20,
  },
});
