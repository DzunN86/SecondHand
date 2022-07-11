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
        shadowRadius: RADIUS.large,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 6,
        marginHorizontal: 16,
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
        borderRadius: 8,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderStyle: 'solid',
        justifyContent: 'center',
    },
    textButton: {
        color: COLORS.black,
        ...FONTS.body5,
        alignSelf: 'center',
        marginVertical: 2,
    }
})