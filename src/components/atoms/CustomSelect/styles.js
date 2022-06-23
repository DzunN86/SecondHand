import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../themes';

export default StyleSheet.create({
  wrapper: {
    // height: 50,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 0,
    marginTop: 5,
  },

  inputContainer: {
    paddingVertical: 12,
  },

  label: {
    color: COLORS.black,
    ...FONTS.tabBarLabel,
  },

  textInput: {
    flex: 1,
    width: '100%',
    color: 'red',
  },

  error: {
    color: COLORS.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
