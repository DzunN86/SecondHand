import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../themes';

export default StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: COLORS.grey2,
  },
  menuItemText: {
    ...FONTS.h4,
    marginLeft: 20,
    color: COLORS.black,
    alignSelf: 'center',
  },
});
