import {StyleSheet} from 'react-native';
import {COLORS, RADIUS, FONTS, SIZES} from '../../themes';

export default StyleSheet.create({
  bgProduk: {
    height: 300,
  },
  button: {
    paddingHorizontal: 16,
    width: '100%',
    marginTop: SIZES.height * 0.89,
    position: 'absolute',
  },
  containerKeterangan: {
    marginTop: -35,
    marginHorizontal: 16,
  },
  bSheet: {
    paddingHorizontal: 32,
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
  bSheetTitle: {
    ...FONTS.h3,
    color: COLORS.black,
    marginTop: 10,
    marginBottom: 16,
  },
  bSheetSubtitle: {
    ...FONTS.body4,
    marginBottom: 16,
  },
});
