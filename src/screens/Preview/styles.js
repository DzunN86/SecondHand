import {StyleSheet} from 'react-native';
import {COLORS, FONTS, RADIUS} from '../../themes';

export default StyleSheet.create({
  bgProduk: {
    height: 300,
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
});
