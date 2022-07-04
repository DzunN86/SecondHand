import {StyleSheet} from 'react-native';
import {COLORS, RADIUS} from '../../themes';

export default StyleSheet.create({
    bgProduk:{
        height:360,
    },
    container: {
        alignItems: 'center',
        height: 90,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.small,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 19,
        marginHorizontal: 16,
    },
    deskripsi: {
        alignItems: 'center',
        height: 295,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.small,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 19,
        marginHorizontal: 16,
    },
    produk: {
        alignItems: 'center',
        height: 120,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.small,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 19,
        marginHorizontal: 16,
    },
})