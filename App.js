import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Svg, { Image } from 'react-native-svg';

const bgImage = require('./public/images/background-image.png')
const logo = require('./public/images/logotypes.svg')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bgImage} style={styles.image}>
        <Text style={styles.mainCopy}>
          매일{'\n'}
          우아해질{'\n'}
          당신을 위해
        </Text>
      </ImageBackground>
      <View styles={styles.logo}>
      </View>
      <View></View>
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
    flex: 2,
    resizeMode: 'contain',
  },
  mainCopy: {
    color: '#fff',
    fontSize: '42',
    lineHeight: '48', // 적절한 높이로 조정
    fontWeight: 'bold',
    marginLeft: 48,
    marginTop: 152,
  },
  logo: {
    flex: 1,
  }
});
