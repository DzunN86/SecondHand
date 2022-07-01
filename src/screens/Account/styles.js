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
    backgroundColor: COLORS.secondary,
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
    ...FONTS.h4,
    marginLeft: 20,
    alignSelf: 'center',
  },
  version: {
    ...FONTS.h4,
    marginTop: 20,
    marginBottom: '80%',
    textAlign: 'center',
  },
  doLogin: {
    marginTop: SIZES.height * 0.3,
    alignSelf: 'center',
  },
});
