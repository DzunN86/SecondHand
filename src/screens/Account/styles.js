import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../themes';

export default StyleSheet.create({
  menuWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
    minHeight: SIZES.height * 0.65,
  },
  version: {
    ...FONTS.body4,
    marginTop: 20,
    textAlign: 'center',
  },
  doLogin: {
    marginTop: SIZES.height * 0.3,
    alignSelf: 'center',
  },
});
