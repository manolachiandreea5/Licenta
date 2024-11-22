import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../components/styles'; // Importă stilurile și componentele stilizate
import { StatusBar } from 'expo-status-bar';

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
  <View style={styles.imageContainer}>
    <Image
      source={require('../assets/first.png')}
      style={styles.image}
    />
  </View>
  <Text style={styles.title}>Start your travel experience</Text>
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}
    onPress={() => navigation.replace('Login')}
    >
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}
     onPress={() => navigation.replace('Singup')}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  </View>
</View>
  );
};

export default FirstPage;