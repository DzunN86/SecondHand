import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS, SIZES} from '../../../themes';

const IconSize = 30;
const TabProduk = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} size={IconSize} style={styles.icon} />
        <Text style={styles.textButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabProduk;

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.27,
    width: SIZES.width * 0.44,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey8,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  textButton: {
    color: COLORS.grey8,
    ...FONTS.body4,
    alignSelf: 'center',
    marginTop: 10,
  },
  icon: {
    color: COLORS.grey8,
    alignItems: 'center',
  },
});
