import {StyleSheet} from 'react-native';
import {COLORS, FONTS, RADIUS, SIZES} from '../../themes/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    width: 58,
    height: 58,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.small,
  },
  productNotification: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: SIZES.base,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray2,
    paddingBottom: 16
  },
  wrapperDate: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  productInfo: {
    marginLeft: 16,
    flex: 1,
  },
  labelText: {
    ...FONTS.body4,
    color: COLORS.black,
  },
  strike_through: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  label: {
    ...FONTS.body5,
  },
  isRead: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.danger,
    borderRadius: RADIUS.xLarge,
    marginTop: 5,
    marginLeft: 8,
  },
  wrapper: {
    flexDirection: 'row',
  },
});
