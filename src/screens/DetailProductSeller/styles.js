import {StyleSheet} from 'react-native';
import { SIZES } from '../../themes';

export default StyleSheet.create({
    bgProduk:{
        height:360,
    },
    containerKeterangan: {
        marginTop: SIZES.height * 0.27,
        marginHorizontal: 16,
    },
    button: {
        // paddingHorizontal: 210,
        // width: '50%', 
        // marginTop: SIZES.height * 0.89,
        // position: 'absolute',
        // flexDirection: 'column',
    },
    button1: {
        // position: "absolute",
        // width: SIZES.width * 0.4,
        // alignSelf: "flex-start",
        // marginLeft: 10,
    },
    button2: {
        position: "absolute",
        width: SIZES.width * 0.4,
        alignSelf: "flex-end",
    },
})