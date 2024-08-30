import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import  StartGameScreen  from './screens/StartGameScreen'
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <LinearGradient colors={['#999392', '#b8847b', '#d98677']} style={styles.mainWrapper}>
      <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMethod="cover"
      style={styles.mainWrapper}
      imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  }
});
