import React from 'react';
import { 
    TouchableOpacity, 
    ImageBackground, 
    StyleSheet, 
    Image, 
    Text, 
    View 
  } from 'react-native';
  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import SignUpScreen from './src/screens/SignUp/SignUp/SignUpScreen';
import TermsScreen from './src/screens/SignUp/Terms/TermsScreen';
import BackButton from "./src/Components/BackButton";
import LocationSetting from './src/screens/SignUp/LocationSetting/LocationSetting';
import MainScreen from './src/screens/Home/Main/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> 
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> 
        <Stack.Screen 
          name="TermsScreen" 
          component={TermsScreen}
          options={{ 
            headerShown: true, 
            headerLeft: ({navigation}) => <BackButton navigation={navigation} />,
            title: ' ', 
          }}
        /> */}
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen 
          name="LocationSetting" 
          component={LocationSetting}
          options={{ 
            headerShown: true, 
            headerLeft: ({navigation}) => <BackButton navigation={navigation} />,
            headerStyle: {shadowColor: 'transparent' },
            title: '내 위치 설정하기', 
          }}
        />      

      </Stack.Navigator>
    </NavigationContainer>    
  );
}