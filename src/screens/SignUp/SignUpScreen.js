import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Logo from '../../../assets/logotypes.svg';
import { SignUpStyles } from '../SignUp/SignUpStyles';

const bgImage = require('../../../public/images/background-image.png');

export default function SignUpScreen() {
  return (
    <View style={SignUpStyles.container}>
      {/* StatusBar */}
      <StatusBar style="light" />

      {/* 백그라운드 이미지 */}
      <View style={SignUpStyles.image}>
        <ImageBackground source={bgImage} style={SignUpStyles.image} />
      </View>

      {/* 메인카피 */}
      <View style={SignUpStyles.mainCopy}>
        <Text style={SignUpStyles.mainCopy}>
          매일{'\n'}
          우아해질{'\n'}
          당신을 위해
        </Text>
      </View>

      {/* 로고 */}
      <View style={SignUpStyles.logo}>
        <Logo style={SignUpStyles.logo}></Logo>
      </View>

      {/* 로그인 APIs */}
      <View style={SignUpStyles.loginWrap}>
        <View style={SignUpStyles.kakaoLogin}>
          <Text style={SignUpStyles.kakaoText}>카카오 로그인</Text>
        </View>
        <View style={SignUpStyles.appleLogin}>
          <Text style={SignUpStyles.appleText}>카카오 로그인</Text>
        </View>
        <Text style={SignUpStyles.nonLogin}>로그인없이 이용하기</Text>
      </View>

    </View>
    
  );
}