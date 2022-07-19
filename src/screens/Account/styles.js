import {StyleSheet} from 'react-native';
import {FONTS} from '../../themes';

export default StyleSheet.create({
  menuWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  version: {
    ...FONTS.body4,
    marginTop: 20,
    marginBottom: '80%',
    textAlign: 'center',
  },
  doLogin: {
    alignSelf: 'center',
  },
});
