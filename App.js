import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logotypes.svg';

const bgImage = require('./public/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bgImage} style={styles.image}>
      </ImageBackground>      
    </View>

      <View style={styles.mainCopy}>
        <Text style={styles.mainCopy}>
          매일{'\n'}
          우아해질{'\n'}
          당신을 위해
        </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  mainCopy: {
    flex: 1,
    color: '#fff',
    fontSize: '40',
    lineHeight: '48', // 적절한 높이로 조정
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 76,
    marginLeft: 24,
  },
  logoContainer: {
    flex: 1,
  }
});
