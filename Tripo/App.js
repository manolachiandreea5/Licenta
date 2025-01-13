// import React from 'react';

// // screens
// import Startapp from './screens/Startapp';
// import FirstPage from './screens/FirstPage';
// import LogIn from './screens/Login';
// import SignUp from './screens/Singup';

// export default function App() {
//   return <SignUp />;
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Startapp from './screens/Startapp';
import FirstPage from './screens/FirstPage';
import Login from './screens/Login';
import Singup from './screens/Singup';
import Home from "./screens/Home";
import BudgetPage from './screens/BudgetPage'; 
import { AuthProvider } from './context/AuthContext'; // Importă contextul


const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startapp">
        <Stack.Screen
          name="Startapp"
          component={Startapp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false, animation: 'fade' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, animation: 'none'  }}
        />
        <Stack.Screen
          name="Singup"
          component={Singup}
          options={{ headerShown: false,  animation: 'none' }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BudgetPage" 
          component={BudgetPage} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

//mongodb+svr://fsUser:<db_password>@fstodo.x7pzi.mongodb.net/?retryWrites=true&w=majority&appName=fstodo
