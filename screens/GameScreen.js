import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Title from "../components/UI/Title";
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


export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() =>{
        if(currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds]);
    }

    return(
        <View style={styles.mainWrapper}>
            <Title>Phone's guess:</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <PrimaryButton pressed={nextGuessHandler.bind(this, '+')}><FontAwesome name="plus" size={24} color={'#fff'} /></PrimaryButton>
                <PrimaryButton pressed={nextGuessHandler.bind(this, '-')}><FontAwesome name="minus" size={24} color={'#fff'} /></PrimaryButton> 
            </View>
            <View>
                {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}
                {/* <FlatList
                data={guessRounds}
                renderItem={(itemData) => <Text>{itemData}</Text>}
                keyExtractor={(item) => item}
                /> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 50,
    },
})