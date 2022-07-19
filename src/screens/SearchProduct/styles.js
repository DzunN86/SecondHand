import {StyleSheet} from 'react-native';
import {COLORS, RADIUS, SIZES} from '../../themes';

export default StyleSheet.create({
  page: {flex: 1},
  search: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.base,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowOpacity: 0.3,
  },
  inputContainer: {
    flex: 1,
    marginLeft: SIZES.base,
    backgroundColor: '#F0F3F8',
    borderRadius: RADIUS.small,
    height: 45,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  cardProductWrapper: {
    marginVertical: SIZES.base,
    flex: 1,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
});
