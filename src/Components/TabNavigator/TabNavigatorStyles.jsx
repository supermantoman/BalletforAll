import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export const TabNavigatorStyles = StyleSheet.create({
  container:{
    backgroundColor: '#fff', 
    flexDirection:'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 44,
    paddingTop: 8,
    paddingBottom: 36,
    borderTopWidth: 1.5,
    borderTopColor: '#333333',
    position: 'absolute',
    width: 375,
    bottom: 0
  },
});

