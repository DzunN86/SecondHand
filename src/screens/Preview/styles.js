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
        paddingHorizontal: 16,
        width: '100%', 
        marginTop: SIZES.height * 0.89,
        position: 'absolute',
    },
})