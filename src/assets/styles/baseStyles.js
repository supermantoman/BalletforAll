import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BaseStyles = StyleSheet.create({
  fontFamaily: {
    fontFamily: 'Roboto',
  },
  letterSpacing:{
    letterSpacing: -0.5
  },
});

