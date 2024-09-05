import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";
import PrimaryButton from '../components/UI/PrimaryButton'

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {height, width} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return(
        <View style={styles.mainWrapper} >
            <Title>GAME OVER!</Title>
            <Image source={require('../assets/images/success.png')} style={[styles.imageContainer, imageStyle]} />
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
        padding: 10,        
    },
    resultContainer: {
        padding: 10,
        marginVertical: 10,
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
        borderRadius: 125,
        width: 250,
        height: 250,
        borderWidth: 3,
        borderColor: Colors.primary500,
        margin: 24,
    }
})