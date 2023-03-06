import React from 'react';
import { View, StyleSheet, Text, Image, } from "react-native";

export default function AcademyInfo(props){
  
  return(
  
    <View style={{backgroundColor: '#fff',height: 141, paddingHorizontal: 24, paddingTop: 25}}>
      <View><Text style={{fontSize: 26, marginBottom: 8,fontWeight: 'bold'}}>이화본발레</Text></View>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
        <Text style={{fontSize: 14, letterSpacing:-0.7, color: '#999'}}>서울시 영등포구 영등포4가 123 가나다 빌딩 4층</Text>
        <Text style={{fontSize: 14, letterSpacing:-0.7, color: '#0066ff', marginLeft: 4}}>지도보기</Text>
        <Image style={{width: 10, height:10, resizeMode:'contain'}} source={require('../../assets/icons/MapViewArrow.png')}></Image>
        </View>
    </View>

  )
}

const AcademyInfoStyles= StyleSheet.create({

})