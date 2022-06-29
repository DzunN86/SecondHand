import {StyleSheet} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../themes';

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
    backgroundColor: "#E2D4F0",
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  separator : {
    height: 0.5, 
    width: '100%', 
    backgroundColor: '#c8c8c8'
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  version: {
    marginTop: 20,
    marginBottom: '80%',
    textAlign: 'center'
  },
  doLogin: {
    marginTop: SIZES.height * 0.3,
    alignSelf: 'center',
  },
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
    fontSize: 27,
    height: 35,
    color: COLORS.gray1,
  },

  bSheetSubtitle: {
    ...FONTS.body3,
    fontSize: 14,
    color: COLORS.gray1,
    height: 30,
    marginBottom: 10,
  },
});
