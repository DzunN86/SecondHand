import {StyleSheet} from 'react-native';
import {COLORS, FONTS, RADIUS, SIZES} from '../../../themes';

export default StyleSheet.create({
  cardProduct: {
    backgroundColor: COLORS.white,
    marginTop: 15,
    borderRadius: RADIUS.small,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    height: SIZES.height * 0.26,
    width: SIZES.width * 0.43,
    padding: 8,
  },
  textCardProduct: {
    ...FONTS.h4,
    marginTop: 8,
    color: COLORS.black,
  },
  typeProduct: {
    ...FONTS.body5,
    marginTop: 4,
  },
  imageProduk: {
    resizeMode: 'stretch',
    borderRadius: RADIUS.small,
    height: 100,
    width: '100%',
  },
});
