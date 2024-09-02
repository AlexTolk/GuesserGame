import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from '../components/UI/PrimaryButton'
import Title from '../components/UI/Title'
import Colors from "../constants/Colors"

export default function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        
        if (chosenNumber <= 0 || isNaN(chosenNumber) || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Input a number from 1 to 99',
                [{text: 'Okay', style: "destructive", onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }
    return(
        <View style={styles.rootContainer}>
            <Title>Let's play!</Title>
            <View style={styles.inputContainer}>
                <Text style={styles.instruction}>Pick a number from 1 to 100, I won't peek, I promise!</Text>
                <TextInput
                style={styles.input}
                maxLength={2}
                inputMode="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressed={confirmInputHandler}>Start</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressed={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    inputContainer: {
        maxHeight: 250,
        marginTop: 50,
        marginHorizontal: 24,
        padding: 30,
        backgroundColor: Colors.primary500,
        borderRadius: 20,
        elevation: 6,
        boxShadowColor: 'black',
        boxShadowOffset: {width: 6, height: 2},
        boxShadowRadius: 10,
        boxShadowOpacity: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    buttonContainer: {
        flex: 1,
    },
    input: {
        height: 50,
        width: 100,
        fontSize: 32,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary500,
        color: Colors.secondary,
        marginVertical: 10,
        fontWeight: '500',
        textAlign: 'center',
    },
    instruction: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'open-sans'
    }
})