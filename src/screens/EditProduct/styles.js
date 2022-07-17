import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../themes';

export default StyleSheet.create({
  scroll: {
    flexGrow: 1, 
    backgroundColor: COLORS.white
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: 25,
  }
})