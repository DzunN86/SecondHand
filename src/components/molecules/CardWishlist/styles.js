import {StyleSheet} from 'react-native';
import {SIZES, RADIUS, COLORS, FONTS} from '../../../themes';

export default StyleSheet.create({
  cardProduct: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    borderRadius: RADIUS.small,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    elevation: 2,
    shadowOpacity: 0.2,
    height: SIZES.height * 0.25,
    width: SIZES.width * 0.44,
    padding: 8,
    marginBottom: 10,
  },
  cardSkeleton: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    height: SIZES.height * 0.25,
    width: SIZES.width * 0.44,
    padding: 8,
    marginBottom: 10,
  },
  imageProduct: {
    backgroundColor: 'grey',
    width: '100%',
    height: 100,
    alignSelf: 'center',
    borderRadius: RADIUS.small,
    resizeMode: 'cover',
  },
  descProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: COLORS.black,
    ...FONTS.h4,
    marginTop: 8,
    width: '90%',
  },
  description: {
    ...FONTS.body5,
    marginTop: 4,
  },
  icon: {
    marginTop: 7,
    marginRight: 2,
  },
});
