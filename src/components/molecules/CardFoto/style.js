import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../../themes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
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
  button: {
    height: 26,
    width: 47,
    borderRadius: 8,
    borderColor: COLORS.primary,
    position: 'absolute',
    right: 0,
    borderStyle: 'solid',
    justifyContent: 'center',
  },
  textButton: {
    color: COLORS.black,
    ...FONTS.body5,
    alignSelf: 'center',
    marginVertical: 2,
  }
})
