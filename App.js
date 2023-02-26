import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import TermsScreen from './src/screens/SignUp/Terms/TermsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="TermsScreen" component={TermsScreen} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

//App.js = 뿌리!!
//라우터=컨트롤 타워
//