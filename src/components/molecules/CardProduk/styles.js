import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../../themes';

export default StyleSheet.create({
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
  wrapperProduk: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  bidPrice: {
    ...FONTS.body3,
    color: COLORS.black,
    marginTop: 6,
  },
  badgeStatus: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: RADIUS.small,
  },
  labelStatus: {
    ...FONTS.body5,
    color: COLORS.white,
  },
  strike_through: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
})
