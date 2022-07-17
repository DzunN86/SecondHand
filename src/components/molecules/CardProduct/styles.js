import {StyleSheet} from 'react-native';
import {COLORS, FONTS, RADIUS, SIZES} from '../../../themes';

export default StyleSheet.create({
  cardProduct: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    borderRadius: RADIUS.small,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    elevation: 2,
    shadowOpacity: 0.2,
    height: SIZES.height * 0.27,
    width: SIZES.width * 0.44,
    padding: 8,
  },
  cardSkeleton: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    height: SIZES.height * 0.27,
    width: SIZES.width * 0.44,
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
    resizeMode: 'cover',
    borderRadius: RADIUS.small,
    height: 100,
    width: '100%',
  },
});
