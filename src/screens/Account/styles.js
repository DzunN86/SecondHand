import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes';

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
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
