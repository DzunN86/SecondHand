import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../../themes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    borderColor: COLORS.grey3,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  wrapperPenjual: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  imagePenjual: {
    borderRadius: 15,
    height: 50,
    width: 50,
    marginRight: 16,
  },
  namaPenjual: {
    ...FONTS.h3,
    color: COLORS.black,
    textTransform: 'capitalize',
    width: 194,
  },
  namaKota: {
    ...FONTS.body5,
    marginTop: 4,
  },
})
