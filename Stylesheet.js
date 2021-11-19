import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
    }, 
    button: {
        margin: 20,
        padding:20,
        borderRadius: 10,
        backgroundColor: '#6fd690',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',

    },
    image: {
        flex: 1,
        width: 500,
        height: 500
    }
});

export default styles;