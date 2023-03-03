import { StyleSheet, View, Text, Button, Image, ScrollView } from "react-native";
import { MainScreenStyles } from "./MainScreenStyles";
import { StatusBar }  from 'expo-status-bar';


export default function MainScreen (){
  return (
    <View style={MainScreenStyles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {/* 배너 영역 */}
        {/* 내 위치 설정 및 필터영역 */}
        {/* 학원 리스트 */}
        {/* 유튜브 영상 */}
        {/* 푸터 */}
        <View >
          <Image style={MainScreenStyles.bgImage} source={require('../../../assets/images/mainBannerImage2.png')}></Image>
          <View style={MainScreenStyles.textWrap}>
            <Text style={MainScreenStyles.bannerText}>
              빛나는{'\n'} 
              당신을{'\n'}
              생각하다</Text>
            <Text style={MainScreenStyles.bannerSubText}>
              마케팅문구는{'\n'}
              두 줄로 한정
            </Text>
          </View>
        </View>
        <View></View>
        <View></View>
        <View></View>
      </ScrollView>
    </View>
  )
}