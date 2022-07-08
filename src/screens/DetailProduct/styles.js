import {StyleSheet} from 'react-native';
import {COLORS, RADIUS, FONTS, SIZES} from '../../themes';

export default StyleSheet.create({
    bgProduk:{
        height:300,
    },
    button: {
        paddingHorizontal: 16,
        width: '100%', 
        marginTop: SIZES.height * 0.89,
        position: 'absolute',
    },
    containerKeterangan: {
        marginTop: SIZES.height * 0.27,
        marginHorizontal: 16,
    },
    container: {
        alignItems: 'center',
        height: 90,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.small,
        borderColor: COLORS.grey3,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    wrapperPenjual: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
    },
    imagePenjual: {
        borderRadius: 15,
        height: 50,
        width: 50,
        marginRight: 16
    },
    namaPenjual: {
        ...FONTS.h4,
        color: COLORS.black,
        textTransform: 'capitalize',
        width: 194,
    },
    namaKota: {
        ...FONTS.body5,
        marginTop: 4,
    },
    deskripsi: {
        alignItems: 'center',
        height: 295,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.small,
        borderColor: COLORS.grey3,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    wrapperDeskripsi: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    title: {
        marginTop: 16,
        marginBottom: 8,
        ...FONTS.h4,
        color: COLORS.black,
        textTransform: 'capitalize',
    },
    deskripsiText: {
        ...FONTS.body4,
    },
    produk: {
        alignItems: 'center',
        height: 120,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.small,
        borderColor: COLORS.grey3,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 19,
    },
    wrapperProduk: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%'
    },
    namaProduk: {
        color: COLORS.black,
        ...FONTS.h4,
        textTransform: 'capitalize',
    },
    kategori: {
        marginTop: 4,
        marginBottom: 8,
        ...FONTS.body5
    },
    price: {
        ...FONTS.h4,
        color: COLORS.black,
    },
    bSheet: {
        paddingHorizontal: 32,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.grey3,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bSheetTitle: {
        ...FONTS.h4,
        color: COLORS.black,
        marginTop: 10,
        marginBottom: 16,
    },
    bSheetSubtitle: {
        ...FONTS.body4,
        marginBottom: 10,
    },
})