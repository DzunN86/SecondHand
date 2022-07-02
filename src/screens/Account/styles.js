import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../themes';

export default StyleSheet.create({
  menuWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  version: {
    ...FONTS.h4,
    marginTop: 20,
    marginBottom: '80%',
    textAlign: 'center',
  },
  doLogin: {
    marginTop: SIZES.height * 0.3,
    alignSelf: 'center',
  },
});
