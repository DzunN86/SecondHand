import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../themes';

const TabItems = ({isFocused, onPress, onLongPress, label}) => {
  const Iconz = () => {
    if (label === 'Home') {
      return isFocused ? <Icon name="home" size={24} color={COLORS.primary} /> : <Icon name="home-outline" size={24} color={COLORS.lightGray3} />;
    }
    if (label === 'Notifikasi') {
      return isFocused ? <Icon name="notifications" size={24} color={COLORS.primary} /> : <Icon name="notifications-outline" size={24} color={COLORS.lightGray3} />;
    }
    if (label === 'Jual') {
      return isFocused ? <Icon name="add-circle" size={24} color={COLORS.primary} /> : <Icon name="add-circle-outline" size={24} color={COLORS.lightGray3} />;
    }
    if (label === 'Daftar Jual') {
      return isFocused ? <Icon name="list-circle" size={24} color={COLORS.primary} /> : <Icon name="list-circle-outline" size={24} color={COLORS.lightGray3} />;
    }
    if (label === 'Akun') {
      return isFocused ? <Icon name="person" size={24} color={COLORS.primary} /> : <Icon name="person-outline" size={24} color={COLORS.lightGray3} />;
    }

    return <Icon name="home" size={24} color={COLORS.primary} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Iconz />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  text: isFocused => ({
    fontSize: 11,
    color: isFocused ? COLORS.primary : COLORS.lightGray3,
    fontFamily: isFocused ? 'Poppins-SemiBold' : 'Poppins-Regular',
    marginTop: 2,
  }),
});
