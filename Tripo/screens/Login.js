// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { styles } from '../components/styles';

// const LogIn = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Eroare', 'Email-ul și parola sunt obligatorii.');
//       return;
//     }
  
//     try {
//       const response = await fetch('http://10.0.2.2:5000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.message || 'Eroare la autentificare.');
//       }
  
//       Alert.alert('Succes', `Autentificare reușită!`);
//       navigation.replace('Home'); // Navighează la pagina "Home"
//     } catch (error) {
//       console.error('Eroare:', error); // Loghează eroarea completă în consolă
//       Alert.alert('Eroare', error.message || 'Eroare necunoscută.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabContainer}>
//         <TouchableOpacity
//           style={styles.activeTab}
          
//         >
//           <Text style={styles.tabTextActive}>Sign in</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.inactiveTab}
//         onPress={() => navigation.replace('Singup')}>
//           <Text style={styles.tabTextInactive}>Sign up</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.welcomeText}>Welcome back!</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>

//       <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
//         <Text style={styles.signInButtonText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LogIn;



import React, { useState, useContext } from 'react'; // Adaugă useContext
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../components/styles';
import { AuthContext } from '../context/AuthContext'; // Importă AuthContext

const LogIn = ({ navigation }) => {
  const { setToken } = useContext(AuthContext); // Accesează setToken din context

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Eroare', 'Email-ul și parola sunt obligatorii.');
      return;
    }
  
    try {
      const response = await fetch('http://10.0.2.2:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
          const errorText = await response.text();
          console.error('Răspuns server non-JSON:', errorText);
          throw new Error('Serverul a returnat un răspuns invalid.');
      }
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Eroare la autentificare.');
      }
  
      if (data.token) {
        setToken(data.token); // Salvează token-ul în context
        //console.log('Token primit:', data.token);
        Alert.alert('Succes', `Autentificare reușită!`);
        navigation.replace('Home'); // Navighează la pagina "Home"
      } else {
        throw new Error('Token lipsă în răspunsul serverului.');
      }
    } catch (error) {
      console.error('Eroare:', error.message || error);
      Alert.alert('Eroare', error.message || 'Eroare necunoscută.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabTextActive}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inactiveTab}
          onPress={() => navigation.replace('Singup')}
        >
          <Text style={styles.tabTextInactive}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>Welcome back!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
