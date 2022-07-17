import {StyleSheet} from 'react-native';
import {COLORS, FONTS, RADIUS, SIZES} from '../../themes';

export default StyleSheet.create({
  bgProduk: {
    height: 360,
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
  produk: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    borderColor: COLORS.grey3,
    borderWidth: 1.5,
    flexDirection: 'row',
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
});
