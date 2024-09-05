import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList, Platform } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import GuessLogItem from "../components/game/GuessLogItem";

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

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if ((direction === '-' && currentGuess < userNumber) || (direction === '+' && currentGuess > userNumber)) {
            if (Platform.OS === 'web') {
                alert('Do not lie!');
                return;
            } else {
                Alert.alert('Do not lie!', '', [{ text: 'Sorry', style: 'cancel' }]);
                return;
            }
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

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.mainWrapper}>
            <Title>Phone's guess:</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={styles.smallTitle}>Higher or lower?</Text>
                <PrimaryButton pressed={nextGuessHandler.bind(this, '+')}>
                    <FontAwesome name="plus" size={24} color={'#fff'} />
                </PrimaryButton>
                <PrimaryButton pressed={nextGuessHandler.bind(this, '-')}>
                    <FontAwesome name="minus" size={24} color={'#fff'} />
                </PrimaryButton>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guessItem={itemData.item}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 50,
    },
    listContainer: {
        flex: 1,
        padding: 14,
    },
    smallTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',

    }
});
