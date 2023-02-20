import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    opacity: 0.8,
  },
  mainCopy: {
    flex: 1,
    color: '#fff',
    fontSize: '38',
    lineHeight: '46',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: height * 0.05, 
    marginLeft: width * 0.05, 
  },
  logo: {
    flex: 1,
    position: 'absolute',
    top: '46.5%',
    left: '47.5%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  loginWrap: {
    alignItems: 'center',
    marginBottom: 88
  },
  kakaoLogin: {
    backgroundColor: 'yellow',
    width: 327,
    height: 66,
  },
  appleLogin: {
    backgroundColor: 'white',
    width: 327,
    height: 66,
    marginTop: 12,
  },
  kakaoText: {
    fontSize: 24,
  },
  appleText: {
    fontSize: 24,
  },
  nonLogin: {
    marginTop: 20,
    fontSize: 16,
    color: '#ccc',
  }
});

