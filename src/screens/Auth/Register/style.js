import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../themes';

export default StyleSheet.create({
  scroll: {flexGrow: 1, backgroundColor: COLORS.white},
  container: {
    flex: 1,
    marginBottom: SIZES.padding,
  },
  daftar: {
    marginHorizontal: SIZES.padding,
    marginTop: 24,
  },
  label: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  form: {
    marginHorizontal: SIZES.padding,
    marginTop: 24,
  },
  masuk: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
  text: {
    color: COLORS.black,
    ...FONTS.body4,
  },
  textButton: {
    color: COLORS.primary,
    ...FONTS.h4,
  },
});
