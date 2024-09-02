import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView  } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import  StartGameScreen  from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true)
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} />
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
