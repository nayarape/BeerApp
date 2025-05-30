import React, { useEffect, useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import styles from '../styles/styles';

const API_URL = 'http://192.168.181.210:3000';

export default function AddBeerScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
      } else {
        Alert.alert('Permissão de localização negada!');
      }
    })();
  }, []);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão para acessar a câmera foi negada!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    if (!name || !description) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);

    if (image) {
      formData.append('photo', {
        uri: image.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    }

    if (location) {
      formData.append('latitude', location.latitude.toString());
      formData.append('longitude', location.longitude.toString());
    }

    try {
      await fetch(`${API_URL}/beers`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro ao salvar cerveja', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome da Cerveja"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        mode="outlined"
        multiline
      />
      <Button
        mode="outlined"
        onPress={pickImage}
        style={[styles.input, { borderColor: '#388E3C' }]}
        icon="camera"
        buttonColor="#A5D6A7"
        textColor="#1B5E20"
      >
        Tirar Foto
      </Button>

      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: '100%', height: 200, marginBottom: 10, borderRadius: 8 }}
        />
      )}

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        buttonColor="#388E3C"
        textColor="#fff"
      >
        Salvar Cerveja
      </Button>
    </View>
  );
}
