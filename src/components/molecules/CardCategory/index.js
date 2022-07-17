import {Skeleton} from '@rneui/base';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {COLORS, FONTS, RADIUS, SIZES} from '../../../themes';

function CardCategory({icon, title, onPress, active, style}) {
  const {isLoading} = useSelector(state => state.commonReducers);
  if (isLoading) {
    return (
      <Skeleton
        animation="wave"
        width={80}
        height={45}
        style={{
          marginTop: 6,
          borderRadius: 12,
          marginRight: 16,
        }}
      />
    );
  }
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

CardCategory.PropTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default memo(CardCategory);

const styles = StyleSheet.create({
  searchKategori: active => ({
    backgroundColor: active ? COLORS.primary : COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 6,
    // marginLeft: 16,
    marginRight: 16,
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
