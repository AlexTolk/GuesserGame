import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";
import PrimaryButton from '../components/UI/PrimaryButton'

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

    return(
        <View style={styles.mainWrapper} >
            <Title>GAME OVER!</Title>
            <Image source={require('../assets/images/success.png')} style={styles.imageContainer} />
            <View style={styles.resultContainer}>
                <Text style={styles.resultText} >
                    The number you picked was <Text style={styles.highlight} >{userNumber}</Text>,
                    I guessed it in <Text style={styles.highlight}>{roundsNumber}</Text> rounds
                </Text>
            </View>
            <PrimaryButton pressed={onStartNewGame}>Play again</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    resultContainer: {
        padding: 10,
        margin: 20,
        backgroundColor: Colors.primary500,
        borderRadius: 20,
    },
    resultText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'open-sans'
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        textDecorationLine: 'underline',
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary500,
        margin: 36,
    }
})