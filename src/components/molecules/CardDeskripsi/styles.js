import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../../themes';

export default StyleSheet.create({
  deskripsi: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    borderColor: COLORS.grey3,
    borderWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 16,
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