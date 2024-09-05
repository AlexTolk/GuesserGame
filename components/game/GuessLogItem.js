import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function GuessLogItem({roundNumber, guessItem}) {
    return(
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Phone's guess: {guessItem} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        padding: 12,
        borderWidth: 3,
        borderRadius: 40,
        borderColor: Colors.primary500,
        backgroundColor: Colors.secondary,
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 8,
        width: '100%',
        elevation: 4,
        boxShadowColor: 'black',
        boxShadowOffset: {width: 0, height: 0},
        boxShadowOpacity: 0.25,
        boxShadowRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})