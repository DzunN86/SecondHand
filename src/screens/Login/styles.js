import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    masuk: {
        marginLeft: 30,
        marginTop: 20
    },
    label : {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textInputContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        color: 'black',
        borderWidth: 1,
        width: 330,
        height: 40,
        borderRadius: 16,
        marginBottom: 10
    },
    loginButton: {
        alignItems: 'center',
        marginTop: 12
    },
    buttonContainer: {
        backgroundColor: '#7126B5',
        width: 280,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    loginText: {
        color: 'white'
    },
    daftar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 330
    },
    text: {
        color: 'black',
    },
    textButton: {
        color: '#7126B5',
        fontWeight: 'bold'
    }
})