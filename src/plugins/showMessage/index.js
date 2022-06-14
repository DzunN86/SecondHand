import {showMessage} from 'react-native-flash-message';
import {COLORS} from '../../themes';

export function showError(message) {
  showMessage({
    message,
    type: 'default',
    backgroundColor: COLORS.danger,
    color: COLORS.white,
  });
}

export function showSuccess(message) {
  showMessage({
    message,
    type: 'default',
    backgroundColor: COLORS.success,
    color: COLORS.white,
  });
}
