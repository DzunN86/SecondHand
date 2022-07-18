import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../themes';

export default StyleSheet.create({
  scroll: {
    flexGrow: 1, 
    backgroundColor: COLORS.white
  },
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 16,
    paddingHorizontal: 16,
  }
})