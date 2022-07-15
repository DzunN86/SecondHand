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
  productNotification: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 16,
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
    color: COLORS.grey2,
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
});
