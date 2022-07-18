import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../themes';

export default StyleSheet.create({
  scroll: {
    flexGrow: 1, 
    backgroundColor: COLORS.white
  },
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    top: SIZES.height * 0.80,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})