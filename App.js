import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const bgImage = require('./assets/background-image.png')

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
      <View></View>
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
    flex: 1,
    resizeMode: 'contain',
  },
  mainCopy: {
    color: '#fff',
    fontSize: '36',
    lineHeight: '44', // 적절한 높이로 조정
    fontWeight: 'bold',
  }
});
