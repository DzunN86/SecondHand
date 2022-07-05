import {StyleSheet} from 'react-native';
import {COLORS, RADIUS, FONTS, SIZES} from '../../themes';

export default StyleSheet.create({
    bgProduk:{
        height:300,
    },
    button: {
        paddingHorizontal: 16,
        width: '100%', 
        marginTop: SIZES.height * 0.9,
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
        borderColor: '#E5E5E5',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 19,
    },
    wrapperPenjual: {
        flexDirection: 'row', 
        alignItems: 'center',
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
        borderColor: '#E5E5E5',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 19,
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
        borderColor: '#E5E5E5',
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
        paddingTop: 20,
    },
    bSheetContainer: {
        backgroundColor: COLORS.white,
        paddingTop: 20,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: COLORS.gray1,
    },
    bSheetHeader: {
        alignItems: 'center',
    },
    bSheetTitle: {
        ...FONTS.h4,
        color: COLORS.black,
        marginBottom: 16,
    },
    bSheetSubtitle: {
        ...FONTS.h4,
        marginBottom: 10,
    },
})