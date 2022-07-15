import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '../../../themes';

function IconButton({icon, title, onPress, active, style}) {
  return (
    <RectButton
      onPress={onPress}
      style={[styles.searchKategori(active), style]}>
      <Icon
        name={icon}
        color={active ? COLORS.white : COLORS.lightGray}
        size={20}
      />
      <Text style={styles.labelCategory(active)}>{title}</Text>
    </RectButton>
  );
}

IconButton.PropTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default memo(IconButton);

const styles = StyleSheet.create({
  searchKategori: active => ({
    backgroundColor: active ? COLORS.primary : COLORS.secondary,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 25,
    borderRadius: 12,
    marginTop: 6,
    // marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  labelCategory: active => ({
    color: active ? COLORS.white : COLORS.lightGray,
    ...FONTS.h4,
    marginLeft: 8,
  }),
});
