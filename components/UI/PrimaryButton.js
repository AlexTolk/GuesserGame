import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PrimaryButton({children, pressed}) {
    const PressHandler = () => {
        alert('You pressed me!')
    }
    return(
        <Pressable onPress={pressed} style={({pressed}) => pressed ? styles.pressed : null}> 
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>{children}</Text>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#5e0331',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 16,
        margin: 4,
    },
    buttonLabel: {
        textAlign: 'center',
        color: '#fff'
    },
    pressed: {
        opacity: 0.75,
    }
})