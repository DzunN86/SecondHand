import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../themes';

export default StyleSheet.create({
  bSheet: {
    padding: 20,
    backgroundColor: COLORS.white,
    paddingTop: 20,
  },
  bSheetContainer: {
    backgroundColor: COLORS.white,
    paddingTop: 20,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: COLORS.gray1,
  },
  bSheetHeader: {
    alignItems: 'center',
  },
  bSheetTitle: {
    ...FONTS.h2,
    height: 35,
  },
  bSheetSubtitle: {
    ...FONTS.h4,
    height: 30,
    marginBottom: 10,
  },
});