import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '../../../themes';
import PropTypes from 'prop-types';

function CardCategory({icon, title, onPress, active}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.searchKategori(active)}>
        <Icon
          name={icon}
          color={active ? COLORS.white : COLORS.lightGray}
          size={20}
        />
        <Text style={styles.labelCategory(active)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

CardCategory.PropTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
  active: PropTypes.bool,
};

export default memo(CardCategory);

const styles = StyleSheet.create({
  searchKategori: active => ({
    backgroundColor: active ? COLORS.primary : COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 6,
    marginLeft: 16,
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
