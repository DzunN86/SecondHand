/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS, FONTS} from '../../../themes';
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
      return COLORS.grey8;
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
    <RectButton
      borderless={false}
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
              color: disabled ? COLORS.lightGray3 : COLORS.white,
              ...FONTS.h4,
              paddingLeft: loading || icon ? 10 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </RectButton>
  );
}

export default memo(CustomButton);
