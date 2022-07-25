import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../../themes';

export default StyleSheet.create({
  produk: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 19,
    paddingVertical: 16,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
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
