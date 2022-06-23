import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../themes';

export default StyleSheet.create({
  scroll: {flexGrow: 1, backgroundColor: COLORS.white},
  container: {
    flex: 1,
  },
  masuk: {
    marginHorizontal: SIZES.padding,
    marginTop: 24,
  },
  label: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  form: {
    marginHorizontal: SIZES.padding,
    marginTop: 24,
  },
  loginText: {
    color: 'white',
  },
  daftar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 19,
    alignSelf: 'center',
  },
  text: {
    ...FONTS.body4,
    color: COLORS.black,
  },
  textButton: {
    color: COLORS.primary,
    ...FONTS.h4,
  },
});
