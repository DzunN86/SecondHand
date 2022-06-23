import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../themes';

export default StyleSheet.create({
    button1: {
        position: "absolute",
        bottom: 10,
        width: SIZES.width * 0.4,
        alignSelf: "flex-start"
    },
    button2: {
        position: "absolute",
        bottom: 10,
        width: SIZES.width * 0.4,
        alignSelf: "flex-end"
    },
    titleText: {
        color: COLORS.black,
        ...FONTS.tabBarLabel,
    },
    container: {
        width: 96,
        height: 96,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        borderColor: COLORS.lightGray2,
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 10,
        marginLeft: 1,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    icon: {
        color: COLORS.lightGray2,
        alignItems: 'center'
    },
    label: {
        color: COLORS.black,
        ...FONTS.tabBarLabel,
    },
})