import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
    'headerContainer': {
        display: 'flex',
        flexDirection: 'column'
    },
    'callToAction': {
        alignSelf: 'center',
    },
    'headerButton': {
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white'
    },
    'buttonText': {
        fontSize: 18,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
        borderColor: 'white'
    }
})