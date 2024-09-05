import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';

export default function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary,
        padding: windowWidth < 380 ? 10 : 24,
        margin: windowWidth < 380 ? 10 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.secondary,
        fontSize: 24,
        fontWeight: 'condensedBold',
    }
})