// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { styles, Title } from '../components/styles'; // Importă componentele și stilurile
// import { StatusBar } from 'expo-status-bar';

// const SignUp = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Tab pentru "Sign in" și "Sign up" */}
//       <View style={styles.tabContainer}>
//         <TouchableOpacity style={styles.inactiveTab}
//          onPress={() => navigation.replace('Login')}>
//           <Text style={styles.tabTextInactive}>Sign in</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.activeTab}>
//           <Text style={styles.tabTextActive}>Sign up</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Titlu */}
//       <Text style={styles.welcomeText}>Hello there!</Text>

//       {/* Formulare pentru "Name", "Username", "Email" și "Password" */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Name</Text>
//         <TextInput placeholder="Enter your name" style={styles.input} />
//       </View>
      
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Username</Text>
//         <TextInput placeholder="Enter your username" style={styles.input} />
//       </View>
      
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput placeholder="Enter your email" style={styles.input} />
//       </View>
      
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput placeholder="Enter your password" secureTextEntry={true} style={styles.input} />
//       </View>

//       {/* Butonul de "Submit" */}
//       <TouchableOpacity style={styles.signInButton}>
//         <Text style={styles.signInButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../components/styles'; // Stilurile trebuie să fie deja definite

const SignUp = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const registerUser = async (userData) => {
    const response = await axios.post(`${BASE_URL}/api/users/register`, userData);
    return response.data;
};

  const handleRegister = async () => {
    try {
        const response = await registerUser(formData);
        Alert.alert('Success', 'User registered successfully!');
        navigation.replace('Login');
    } catch (error) {
        console.error(error);
        Alert.alert('Error', error.response?.data?.message || 'Registration failed');
    }
};

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.inactiveTab}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.tabTextInactive}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabTextActive}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>Create an account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={formData.username}
          onChangeText={(value) => handleInputChange('username', value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={true}
          style={styles.input}
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleRegister}>
        <Text style={styles.signInButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
