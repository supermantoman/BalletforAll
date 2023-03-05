import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { TabNavigatorStyles } from "./TabNavigatorStyles";


export default function TabNavigator() {

  
  return (

    <View style={TabNavigatorStyles.container}>
      <View style={{alignItems:'center'}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarHomeIcon.png')} />
        <Text style={{fontSize:13, color: '#bbb', marginTop:4}}>홈</Text>
      </View>

      <View style={{alignItems:'center'}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarSearch.png')} />
        <Text style={{fontSize:13, color: '#bbb', marginTop:4}}>검색</Text>
      </View>

      <View style={{alignItems:'center'}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarMap.png')} />
        <Text style={{fontSize:13, color: '#bbb', marginTop:4}}>지도보기</Text>
      </View>

      <View style={{alignItems:'center'}}>
        <Image style={{width:28, height:28, resizeMode:'cover'}} source={require('../../assets/icons/navBarMyPage.png')} />
        <Text style={{fontSize:13, color: '#bbb', marginTop:4}}>마이발레</Text>
      </View>
    </View>
  );
}