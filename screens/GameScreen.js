import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/UI/Title"
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}
let lowerBoundary = 1;
let upperBoundary = 100;


export default function GameScreen({userNumber}) {
    const initialGuess = generateRandomNumber(lowerBoundary, upperBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if ((direction === '-' && currentGuess < userNumber) || (direction === '+' && currentGuess > userNumber)) {
            Alert.alert('Do not lie!', '', [{text: 'Sorry', style:'cancel'}])
            return;
        }

        if (direction === '-') {
            upperBoundary = currentGuess;
        } else {
            lowerBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomNumber(lowerBoundary, upperBoundary, currentGuess);
        setCurrentGuess(newRndNum);
    }

    return(
        <View style={styles.mainWrapper}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <PrimaryButton pressed={nextGuessHandler.bind(this, '+')}>+</PrimaryButton>
                <PrimaryButton pressed={nextGuessHandler.bind(this, '-')}>-</PrimaryButton> 
            </View>
            <View></View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 50,
    },
})