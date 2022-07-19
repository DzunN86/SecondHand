import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../themes';

export default StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    top: SIZES.height * 0.80,
    paddingHorizontal: 16,
  },
  scroll: {
    flexGrow: 1, 
    backgroundColor: COLORS.white
  },
});