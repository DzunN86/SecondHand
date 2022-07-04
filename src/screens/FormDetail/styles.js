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
})