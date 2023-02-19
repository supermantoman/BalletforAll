import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Logo from './assets/logotypes.svg';


const bgImage = require('./public/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar style="light" />

      {/* 백그라운드 이미지 */}
      <View style={styles.image}>
        <ImageBackground source={bgImage} style={styles.image} />
      </View>

      {/* 메인카피 */}
      <View style={styles.mainCopy}>
        <Text style={styles.mainCopy}>
          매일{'\n'}
          우아해질{'\n'}
          당신을 위해
        </Text>
      </View>

      {/* 로고 */}
      <View style={styles.logo}>
        <Logo style={styles.logo}></Logo>
      </View>
    </View>
    
  );
}

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
