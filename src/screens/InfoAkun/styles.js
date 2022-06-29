import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../themes';

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
    backgroundColor: '#E2D4F0',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute', 
    bottom: 30, 
    width: SIZES.width * 0.9, 
    alignSelf: "center"
  },
  menuWrapper: {
    marginTop: 35,
    paddingHorizontal: 20,
  },
  action: {
    textAlignVertical: 'top',
    paddingBottom: 0,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 0.25,
    borderColor: COLORS.darkGreen,
    color: COLORS.darkBlue,
  },
  textLabel: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 3,
  },
  form: {
    marginHorizontal: SIZES.padding,
    marginTop: 24,
    marginBottom: 30,
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