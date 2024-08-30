import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
    return(
        <View style={styles.inputContainer}>
            <Text>Let's play!</Text>
            <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Start</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
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
        shadowColor: 'black',
        shadowOffset: {width: 6, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.5,
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