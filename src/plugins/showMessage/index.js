import {showMessage} from 'react-native-flash-message';
import {COLORS, FONTS, RADIUS, SIZES} from '../../themes';

export function showError(message) {
  showMessage({
    message,
    type: 'default',
    backgroundColor: COLORS.danger,
    color: COLORS.white,
    icon: 'danger',
    duration: 5000,
    style: {
      marginTop: SIZES.padding * 2 + 6,
      marginHorizontal: SIZES.padding,
      borderRadius: RADIUS.medium,
      padding: SIZES.base,
    },
    titleStyle: {
      ...FONTS.h5,
      marginTop: 3,
    },
  });
}

export function showSuccess(message) {
  showMessage({
    message,
    type: 'default',
    backgroundColor: COLORS.success,
    color: COLORS.white,
    icon: 'success',
    duration: 5000,
    style: {
      marginTop: SIZES.padding * 2 + 6,
      marginHorizontal: SIZES.padding,
      borderRadius: RADIUS.medium,
      padding: SIZES.base,
    },
    titleStyle: {
      ...FONTS.h5,
      marginTop: 3,
    },
  });
}
