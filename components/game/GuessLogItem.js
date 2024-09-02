import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function GuessLogItem({roundNumber, guessItem}) {
    <Text style={styles.listItem}>#{roundNumber}: Phone's guess: {guessItem} </Text>
}
const styles = StyleSheet.create({
    listItem: {
        padding: 12,
        borderColor: Colors.secondary,
        borderWidth: 3,
        backgroundColor: Colors.primary500,
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 8,
    },
})