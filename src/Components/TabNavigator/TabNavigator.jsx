import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabNavigatorStyles } from "./TabNavigatorStyles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function TabNavigator() {

  const navigation = useNavigation();

  
  return (

    <View style={TabNavigatorStyles.container}>
      <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}} onPress={()=>{navigation.navigate('MainScreen')}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarHomeIcon.png')} />
        <Text style={{fontSize:12, color: '#222', marginTop:2}}>홈</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}} onPress={()=>{navigation.navigate('SearchScreen')}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarSearch.png')} />
        <Text style={{fontSize:12, color: '#bbb', marginTop:2}}>검색</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}} onPress={()=>{navigation.navigate('MapDefaultScreen')}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarMap.png')} />
        <Text style={{fontSize:12, color: '#bbb', marginTop:2}}>지도보기</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}} onPress={()=>{navigation.navigate('MyBalletScreen')}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarMyPage.png')} />
        <Text style={{fontSize:12, color: '#bbb', marginTop:2}}>마이발레</Text>
      </TouchableOpacity>
    </View>
  );
}