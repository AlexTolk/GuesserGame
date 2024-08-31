import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from '../components/PrimaryButton'

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
        <View style={styles.inputContainer}>
            <Text>Let's play!</Text>
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
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        maxHeight: 250,
        marginTop: 150,
        marginHorizontal: 24,
        padding: 30,
        backgroundColor: '#72063c',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        backgroundColor: '#72063',
        color: '#ddb52f',
        marginVertical: 10,
        fontWeight: '500',
        textAlign: 'center',
    }
})