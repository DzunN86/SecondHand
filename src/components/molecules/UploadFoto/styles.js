import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes';

export default StyleSheet.create({
  icon: {
    opacity: 0.7,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 100,
    width: 100,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
  },
});
