import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS, SIZES } from '../../../themes';

export default StyleSheet.create({
  deskripsi: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    minHeight: SIZES.height * 0.19,
    marginVertical: 16,
    paddingVertical: 16,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  wrapperDeskripsi: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    ...FONTS.h3,
    color: COLORS.black,
    textTransform: 'capitalize',
  },
  deskripsiText: {
    ...FONTS.body3,
    textAlign: 'justify',
  },
})