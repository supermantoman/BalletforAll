import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet, View, Text, CheckBox } from 'react-native';
import { LocationSettingStyles } from "./LocationSettingStyles";

export default function LocationSetting() {
  return (
    <View style={LocationSettingStyles.container}> 


      <StatusBar style="black" />
      {/* 검색영역 */}
      {/* 시군구동 선택영역*/}
      {/* 설정하기 버튼 */}

      <View style={LocationSettingStyles.searchWrap}></View>
      <View style={LocationSettingStyles.siGoonGooDong}>
        <View style={LocationSettingStyles.si}></View>
        <View style={LocationSettingStyles.goonGo}></View>
        <View style={LocationSettingStyles.dong}></View>
      </View>
      <View style={LocationSettingStyles.sumit}></View>
    </View>
  );
}