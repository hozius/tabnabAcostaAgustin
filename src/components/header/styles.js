import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AA9600',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    }
});