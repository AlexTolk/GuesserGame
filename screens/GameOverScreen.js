import { View, Text, StyleSheet, Button } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";

export default function GameOverScreen({userNumber}) {

    return(
        <View>
            <Title>GAME OVER!</Title>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText} >The number you picked was {userNumber} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
})