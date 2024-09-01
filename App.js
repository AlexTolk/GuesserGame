import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import  StartGameScreen  from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { ImageBackground, SafeAreaView  } from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>
  }
  return (
    <LinearGradient colors={['#999392', '#b8847b', '#d98677']} style={styles.mainWrapper}>
      <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMethod="cover"
      style={styles.mainWrapper}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.mainWrapper}>
          {screen}
        </SafeAreaView>
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
