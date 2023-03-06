import React from 'react';
import { View, StyleSheet, Image,  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SwiperFlatList } from "react-native-swiper-flatlist";


export default function TopInfo (){

return (
      <TouchableOpacity activeOpacity={0.4}>
        <SwiperFlatList showPagination >
        <Image source={require('../../assets/images/detailMainImage.png')} style={{width:375, height: 311, resizeMode:'contain'}} />
        <Image source={require('../../assets/images/detailMainImage.png')} style={{width:375, height: 311, resizeMode:'contain'}} />
        <Image source={require('../../assets/images/detailMainImage.png')} style={{width:375, height: 311, resizeMode:'contain'}} />
        </SwiperFlatList>

        <View style={TopInfoStyles.iconWrap}>
        <Image style={TopInfoStyles.shareIcon} source={require('../../assets/icons/ShareIcon.png')}></Image>
        <Image style={TopInfoStyles.loveIcon} source={require('../../assets/icons/DetailLoveIcon.png')}></Image>
        <View style={{width: 40, height: 6, backgroundColor: '#fff' }} />
        </View>        
      </TouchableOpacity>
  )
}


const TopInfoStyles = StyleSheet.create({
  container: { 
    flex:1,
    position: 'relative',
   },
  iconWrap: {
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
  },
  shareIcon:{ width: 24, height: 24, resizeMode: 'contain'},
  loveIcon: { width: 24, height: 24, resizeMode: 'contain'},
})