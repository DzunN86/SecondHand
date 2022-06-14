import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes';

export default StyleSheet.create({
  wrapper: {
    height: 45,

    paddingHorizontal: 5,

    marginVertical: 5,
    borderRadius: 7,
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
