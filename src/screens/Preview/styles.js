import {StyleSheet} from 'react-native';
import { COLORS, FONTS, RADIUS } from '../../themes';

export default StyleSheet.create({
  bgProduk:{
    height:300,
  },
  containerKeterangan: {
    marginTop: -35,
    marginHorizontal: 16,
  },
  buttonWrapper: {
    width: '100%',
    bottom: 16,
    marginTop: 16,
  },
  wrapperProduk: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  produk: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    borderColor: COLORS.grey3,
    borderWidth: 1.5,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 19,
    paddingVertical: 16,
  },
  namaProduk: {
    color: COLORS.black,
    ...FONTS.h3,
    textTransform: 'capitalize',
  },
  kategori: {
    marginTop: 4,
    marginBottom: 8,
    ...FONTS.body5,
  },
  price: {
    ...FONTS.body3,
    color: COLORS.black,
  },
})