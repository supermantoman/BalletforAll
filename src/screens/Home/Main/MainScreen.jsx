import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions } from "react-native";
import { MainScreenStyles } from "./MainScreenStyles";
import { StatusBar }  from 'expo-status-bar';
import { SwiperFlatList } from "react-native-swiper-flatlist";

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

export default function MainScreen (){
  return (
    <View style={MainScreenStyles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {/* 배너 영역 */}
        {/* 유튜브 영상 */}
        {/* 푸터 */}
        <View >
        <View style={MainScreenStyles.swiperContainer}>
        <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination paginationStyleItem={{width: 8, height: 8}} >
          <View style={[MainScreenStyles.child, { backgroundColor: 'tomato' }]}>
          <Image style={MainScreenStyles.bgImage} source={require('../../../assets/images/mainBannerImage2.png')}/>
          </View>
          <View style={[MainScreenStyles.child, { backgroundColor: 'thistle' }]}>
          <Image style={MainScreenStyles.bgImage} source={require('../../../assets/images/mainBannerImage2.png')}/>
          </View>
          <View style={[MainScreenStyles.child, { backgroundColor: 'skyblue' }]}>
          <Image style={MainScreenStyles.bgImage} source={require('../../../assets/images/mainBannerImage2.png')}/>
          </View>
          <View style={[MainScreenStyles.child, { backgroundColor: 'teal' }]}>
          <Image style={MainScreenStyles.bgImage} source={require('../../../assets/images/mainBannerImage2.png')}/>
          </View>
        </SwiperFlatList>
        </View>
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
          
          <View style={MainScreenStyles.filtering}>
            <Text>가까운 순</Text>
            <Image source={require('../../../assets/icons/downArrow-Thin.png')}></Image>
          </View>
        </View>

        {/* 학원 리스트 */}
        <View style={MainScreenStyles.listItem}>
          <Image style={MainScreenStyles.itemImage} source={require('../../../assets/images/itemImage.png')} />
          <View style={MainScreenStyles.arrowWrap}>
            <Image source={require('../../../assets/icons/ProductLeftArrow.png')} />
            <Image source={require('../../../assets/icons/ProductRightArrow.png')} />
          </View>
          <View style={[MainScreenStyles.infoWrap, {backgroundColor:'#fff'}]}>
            <View style={MainScreenStyles.titleWrap}>
              <Text style={{fontSize:20, fontWeight: 'bold'}}>이화본발레</Text>
              <Image style={{width:24, height:23}} source={require('../../../assets/icons/productHeartIcon.png')}></Image>
          </View>
          <Text style={{fontSize:14, marginTop:8, marginBottom:18, color: '#999', letterSpacing: -1}}>서울시 영등포구 영등포동4가 123 가나빌딩...</Text>
          <Text style={{fontWeight:'400', marginBottom:12,letterSpacing: -0.2}}>정규수업 1회당 50,000원~</Text>
          <Text style={{fontWeight:'400', marginBottom:12,letterSpacing: -0.2}}>쿠폰수업 1회당 60,000원~</Text>
          <Text style={{fontWeight:'400',letterSpacing: -0.2 }}>작품반 백조의 호수, 르네의 눈몰 외 2개</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}