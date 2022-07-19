import {StyleSheet} from 'react-native';
import {COLORS, FONTS, RADIUS} from '../../themes';
// import { COLORS } from '../../themes/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  productImage: {
    width: 58,
    height: 58,
    borderRadius: RADIUS.medium,
  },
  bSheet: {
    paddingHorizontal: 32,
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
  bSheetTitle: {
    ...FONTS.h3,
    color: COLORS.black,
    marginTop: 10,
    marginBottom: 16,
  },
  bSheetSubtitle: {
    ...FONTS.body4,
    marginBottom: 16,
  },
  productNotification: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 16,
  },
  productMatch: {
    flexDirection: 'row',
  },
  bSheetBody: {
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  infoBuyer: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchTitle: {
    color: COLORS.black,
    ...FONTS.h3,
    textAlign: 'center',
  },
  wrapperDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  productInfo: {
    marginLeft: 15,
    flex: 1,
  },
  labelText: {
    ...FONTS.body4,
    color: COLORS.black,
    marginBottom: 6,
  },
  label: {
    ...FONTS.body4,
    color: COLORS.grey1,
  },
  LabelPenawaran: {
    ...FONTS.h3,
    color: COLORS.black,
    marginHorizontal: 16,
    marginTop: 20,
  },
  button1: {
    width: 160,
    height: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
  },
  button2: {
    width: 160,
    height: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  strike_through: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  radioWrapper: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'stretch',
    padding: 0,
  },
  labelRadio:{
    ...FONTS.body3,
    color: COLORS.black,
  },
  sublabelRadio:{
    ...FONTS.body3,
    color: COLORS.grey1,
    marginTop: 8,
  }
});
