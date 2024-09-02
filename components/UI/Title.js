import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

export default function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        color: Colors.secondary,
        fontSize: 25,
        textAlign: 'center',
        borderColor: Colors.secondary,
        borderWidth: 2,
        padding: 10,
    }
})