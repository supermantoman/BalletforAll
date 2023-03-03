import { StyleSheet, View, Text, Button, Image, ScrollView } from "react-native";
import { MainScreenStyles } from "./MainScreenStyles";
import { StatusBar }  from 'expo-status-bar';


export default function MainScreen (){
  return (
    <View style={MainScreenStyles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {/* 배너 영역 */}
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

        {/* 내 위치 설정 및 필터영역 */}
        <View style={MainScreenStyles.filterWrap}>
          <Text style={MainScreenStyles.addressText}>서초 1동</Text>
          <View style={MainScreenStyles.flitering}>
            <Text>가까운 순</Text>
          </View>
        </View>

        {/* 학원 리스트 */}
        <View style={MainScreenStyles.listItem}>
          <Image style={MainScreenStyles.itemImage} source={require('../../../assets/images/itemImage.png')} />
          <View style={[MainScreenStyles.infoWrap, {backgroundColor:'#fff'}]}>
            <View style={MainScreenStyles.titleWrap}>
              <Text style={{fontSize:20, fontWeight: 'bold'}}>이화본발레</Text>
              <Image style={{width:25, height:25}} source={require('../../../assets/icons/productHeartIcon.png')}></Image>
          </View>
          <Text style={{fontSize:14, marginTop:8, marginBottom:20, color: '#999'}}>서울시 영등포구 영등포동4가 123 가나빌딩 4층</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>정규수업 1회당 50,000원~</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>쿠폰수업 1회당 60,000원~</Text>
          <Text style={{fontWeight:'400', }}>작품반 백조의 호수, 르네의 눈몰 외 2개</Text>
          </View>
        </View>
        <View style={MainScreenStyles.listItem}>
          <Image style={MainScreenStyles.itemImage} source={require('../../../assets/images/itemImage.png')} />
          <View style={[MainScreenStyles.infoWrap, {backgroundColor:'#fff'}]}>
            <View style={MainScreenStyles.titleWrap}>
              <Text style={{fontSize:20, fontWeight: 'bold'}}>이화본발레</Text>
              <Image style={{width:25, height:25}} source={require('../../../assets/icons/productHeartIcon.png')}></Image>
          </View>
          <Text style={{fontSize:14, marginTop:8, marginBottom:20, color: '#999'}}>서울시 영등포구 영등포동4가 123 가나빌딩 4층</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>정규수업 1회당 50,000원~</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>쿠폰수업 1회당 60,000원~</Text>
          <Text style={{fontWeight:'400', }}>작품반 백조의 호수, 르네의 눈몰 외 2개</Text>
          </View>
        </View>
        <View style={MainScreenStyles.listItem}>
          <Image style={MainScreenStyles.itemImage} source={require('../../../assets/images/itemImage.png')} />
          <View style={[MainScreenStyles.infoWrap, {backgroundColor:'#fff'}]}>
            <View style={MainScreenStyles.titleWrap}>
              <Text style={{fontSize:20, fontWeight: 'bold'}}>이화본발레</Text>
              <Image style={{width:25, height:25}} source={require('../../../assets/icons/productHeartIcon.png')}></Image>
          </View>
          <Text style={{fontSize:14, marginTop:8, marginBottom:20, color: '#999'}}>서울시 영등포구 영등포동4가 123 가나빌딩 4층</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>정규수업 1회당 50,000원~</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>쿠폰수업 1회당 60,000원~</Text>
          <Text style={{fontWeight:'400', }}>작품반 백조의 호수, 르네의 눈몰 외 2개</Text>
          </View>
        </View>
        <View style={MainScreenStyles.listItem}>
          <Image style={MainScreenStyles.itemImage} source={require('../../../assets/images/itemImage.png')} />
          <View style={[MainScreenStyles.infoWrap, {backgroundColor:'#fff'}]}>
            <View style={MainScreenStyles.titleWrap}>
              <Text style={{fontSize:20, fontWeight: 'bold'}}>이화본발레</Text>
              <Image style={{width:25, height:25}} source={require('../../../assets/icons/productHeartIcon.png')}></Image>
          </View>
          <Text style={{fontSize:14, marginTop:8, marginBottom:20, color: '#999'}}>서울시 영등포구 영등포동4가 123 가나빌딩 4층</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>정규수업 1회당 50,000원~</Text>
          <Text style={{fontWeight:'400', marginBottom:12}}>쿠폰수업 1회당 60,000원~</Text>
          <Text style={{fontWeight:'400', }}>작품반 백조의 호수, 르네의 눈몰 외 2개</Text>
          </View>
        </View>
        <View></View>
        <View></View>
      </ScrollView>
    </View>
  )
}