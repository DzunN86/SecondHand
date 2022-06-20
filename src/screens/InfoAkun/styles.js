import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../themes';

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
  button: {
    position: "absolute", 
    bottom: 10, 
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
  }
});
