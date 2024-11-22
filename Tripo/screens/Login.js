import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../components/styles';
import { StatusBar } from 'expo-status-bar';

const LogIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      {/* Bara de navigare pentru Sign In și Sign Up */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabTextActive}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}
        onPress={() => navigation.replace('Singup')}>
          <Text style={styles.tabTextInactive}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Titlu */}
      <Text style={styles.welcomeText}>Welcome back!</Text>

      {/* Input pentru email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Email" />
      </View>

      {/* Input pentru parolă */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      {/* Forgot password */}
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>

      {/* Butonul de Sign In */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;