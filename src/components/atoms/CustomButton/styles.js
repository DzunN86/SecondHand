import {StyleSheet} from 'react-native';
import {COLORS, RADIUS} from '../../../themes';

export default StyleSheet.create({
  wrapper: {
    height: 45,

    paddingHorizontal: 5,
    borderColor: COLORS.black,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: RADIUS.large,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  loaderSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: COLORS.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
