import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export const LocationSettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  searchWrap: {
    flex: 0.1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#eee',
  },
  siGoonGooDong:{
    flex: 0.8,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  sumit:{
    flex: 0.1,
    backgroundColor: 'skyblue',
  },
  si:{
    backgroundColor: '#fff',
    flex: 1
  },
  goonGo:{
    flex: 1,
    backgroundColor: '#fff'
  },
  dong:{
    flex: 1,
    backgroundColor: '#fff'
  },
  input:{
    height: 48,
    // marginHorizontal: 24,
    backgroundColor: "#eee",
    padding: 16,
    width: '70%',
  },
  myLocation:{
    marginLeft: 16,
    width: 40,
    height: 40,
  },

})