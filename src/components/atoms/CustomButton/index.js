/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../themes';
import styles from './styles';

function CustomButton({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
  icon,
  testID,
}) {
  const getBgColor = () => {
    if (disabled) {
      return COLORS.lightGray3;
    }
    if (primary) {
      return COLORS.primary;
    }
    if (danger) {
      return COLORS.danger;
    }

    if (secondary) {
      return COLORS.secondary;
    }
  };
  return (
    <TouchableOpacity
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator color={primary ? COLORS.black : COLORS.primary} />
        )}
        {icon}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : COLORS.white,
              paddingLeft: loading || icon ? 10 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default memo(CustomButton);
