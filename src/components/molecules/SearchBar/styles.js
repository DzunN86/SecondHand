import {StyleSheet} from 'react-native';
import {COLORS, FONTS, RADIUS} from '../../../themes';

export default StyleSheet.create({
  search: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    marginHorizontal: 16,
    borderRadius: RADIUS.medium,
    marginTop: 38,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSearch: {
    ...FONTS.body4,
    color: COLORS.grey2,
  },
});
