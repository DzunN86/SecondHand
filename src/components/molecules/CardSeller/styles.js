import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes';
export default StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 90,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCard: {
        height: 50,
        width: 50,
        borderRadius: 15,
        backgroundColor: COLORS.black,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 35,
        width: 60,
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    textButton: {
        color: COLORS.gray,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 6,
        fontWeight: 'bold'
    }
})