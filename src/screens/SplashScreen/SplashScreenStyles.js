import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
    // flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    opacity: 0.8,
  },
  mainCopy: {
    flex: 1,
    color: '#fff',
    fontSize: '36',
    lineHeight: '40', // 적절한 높이로 조정
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 76,
    marginLeft: 24,
  },
  logo: {
    flex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
  }
});
