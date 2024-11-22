import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles, Title } from '../components/styles'; // Importă componentele și stilurile
import { StatusBar } from 'expo-status-bar';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Tab pentru "Sign in" și "Sign up" */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.inactiveTab}
         onPress={() => navigation.replace('Login')}>
          <Text style={styles.tabTextInactive}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabTextActive}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Titlu */}
      <Text style={styles.welcomeText}>Hello there!</Text>

      {/* Formulare pentru "Name", "Username", "Email" și "Password" */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput placeholder="Enter your name" style={styles.input} />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Enter your username" style={styles.input} />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Enter your email" style={styles.input} />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="Enter your password" secureTextEntry={true} style={styles.input} />
      </View>

      {/* Butonul de "Submit" */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;