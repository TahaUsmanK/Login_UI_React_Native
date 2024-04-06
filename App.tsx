import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/home_screen/home_screen';
import LoginScreen from './src/screens/login_screen/login_screen';
import SignUpScreen from './src/screens/signup_screen/signup_screen';

function App(): React.JSX.Element {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" options={{ headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false}} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
