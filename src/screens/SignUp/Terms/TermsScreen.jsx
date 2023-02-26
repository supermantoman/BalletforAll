import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Icon, Image, StyleSheet, Text, View } from 'react-native';
import TermsStyles from './TermsStyles';


export default function TermsScreen() {
  return (

    <View> 
      <StatusBar style="black" />

      {/* 뒤로가기버튼 */}
      <View>
        <Image source={require('../../../assets/icons/backspace.png')}></Image>
      </View>

      {/* 약관동의 제목,부제목 */}
      {/* 약관동의 체크버튼 */}
      {/* 가입하기 버튼 */}
    </View>
    
  );
}