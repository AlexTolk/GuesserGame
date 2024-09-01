import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

export default function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.secondary,
        fontSize: 24,
        fontWeight: 'condensedBold',
    }
})