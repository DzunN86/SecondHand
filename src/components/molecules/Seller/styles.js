import { StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS } from '../../../themes';
export default StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 90,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.medium,
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
        borderRadius: RADIUS.medium,
        backgroundColor: COLORS.black,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 26,
        width: 47,
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 1,
        borderStyle: 'solid',
        alignContent: 'center'
    },
    textButton: {
        color: COLORS.black,
        ...FONTS.body5,
        alignSelf: 'center',
        marginVertical: 2,
    }
})