import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export const TabNavigatorStyles = StyleSheet.create({
  container:{
    backgroundColor: '#fff', 
    flexDirection:'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 12,
    paddingBottom: 36,
    borderTopWidth: 0.5,
    borderTopColor: '#e5e5e5',
  },
});

