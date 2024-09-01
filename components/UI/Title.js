import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

export default function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}
const styles = StyleSheet.create({
    title: {
        color: Colors.secondary,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})