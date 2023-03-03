import { Dimensions, StyleSheet } from 'react-native';

export const MainScreenStyles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ccc'
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
  filterWrap:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 22,
  },
  addressText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  bannerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 3,
    paddingTop: 150,
    paddingLeft: 48,
    lineHeight: 48
  },
  bannerSubText:{
    fontSize: 16,
    color: '#ccc',
    fontWeight: '500',
    letterSpacing: 2,
    paddingLeft: 48,
    marginTop: 16,
    lineHeight: 28,
  },
  infoWrap:{
    position: 'absolute',
    bottom: 0,
    height: 190,
    width: 327,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  titleWrap:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  listItem :{
    backgroundColor: '#fff',
    height: 376,
    marginTop: 24,
    position: 'relative',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  itemImage:{
    resizeMode: 'cover',
    height: '50%',
    maxWidth: '50%',
    position: 'absolute',
  },
  filtering:{
    backgroundColor: 'blue',
  },
});

