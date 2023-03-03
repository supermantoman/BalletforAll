import { Dimensions, StyleSheet } from 'react-native';

export const MainScreenStyles = StyleSheet.create({
  container: {
    flex:1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'stretch',
    position: 'relative'
  },
  textWrap:{
    flexDirection: 'column',
    position: 'absolute',
  },
  bannerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 3,
    paddingTop: 170,
    paddingLeft: 48,
    lineHeight: 48
  },
  bannerSubText:{
    fontSize: 16,
    color: '#ccc',
    letterSpacing: 2,
    paddingLeft: 48,
    marginTop: 16,
    lineHeight: 28,
  }
});

