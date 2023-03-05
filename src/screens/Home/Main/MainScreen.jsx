import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions, Modal } from "react-native";
import TabNavigator, {  } from "../../../Components/TabNavigator/TabNavigator";
import { MainScreenStyles } from "./MainScreenStyles";
import { StatusBar }  from 'expo-status-bar';
import { SwiperFlatList } from "react-native-swiper-flatlist";

export default function MainScreen (){


  return (
    <View style={MainScreenStyles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {/* 배너 영역 */}
        <View >
        <View style={MainScreenStyles.swiperContainer}>
        <SwiperFlatList 
        autoplay 
        autoplayDelay={4} 
        autoplayLoop index={3} 
        showPagination 
        paginationStyleItem={{width: 8, height: 8, opacity: 0.6, }}
        autoplayLoopKeepAnimation >
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
          <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Text style={MainScreenStyles.addressText}>서초 1동</Text>
          <Image style={{ marginLeft:2 ,width: 18, height:12, resizeMode:'contain'}} source={require('../../../assets/icons/downArrow.png')}></Image>
          </View>
          <View style={MainScreenStyles.filtering} >
            <Text style={{fontSize:12}}>가까운 순</Text>
            <Image style={{marginLeft: 4, width:11, height: 5}} source={require('../../../assets/icons/downArrow-Thin.png')}></Image>
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
              <Text style={{fontSize:22, fontWeight: 'bold'}}>이화본발레</Text>
              <Image style={{width:24, height:23}} source={require('../../../assets/icons/productHeartIcon.png')}></Image>
          </View>
          <Text style={{fontSize:15, marginTop:8, marginBottom:18, color: '#999', letterSpacing: -1}}>서울시 영등포구 영등포동4가 123 가나빌딩...</Text>
          <Text style={{fontWeight:'400', marginBottom:12,letterSpacing: -0.2}}><Text style={{fontWeight:'600'}}>정규수업</Text>     1회당 50,000원 ~</Text>
          <Text style={{fontWeight:'400', marginBottom:12,letterSpacing: -0.2}}><Text style={{fontWeight:'600'}}>쿠폰수업</Text>     1회당 60,000원 ~</Text>
          <Text style={{fontWeight:'400',letterSpacing: -0.2 }}><Text style={{fontWeight:'600'}}>작품반</Text>        백조의 호수, 르네의 눈물 외 2개</Text>
          </View>
        </View>

      </ScrollView>
      <TabNavigator /> 
    </View>
  )
}