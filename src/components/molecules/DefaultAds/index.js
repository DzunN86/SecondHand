import {StyleSheet, Text, View, Image} from 'react-native';
import React, {memo} from 'react';
import {COLORS, FONTS} from '../../../themes';
import {hadiah} from '../../../assets';

const DefaultAds = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.textIklan} numberOfLines={2}>
          {'Bulan Ramadhan\nBanyak diskon!'}
        </Text>
        <View style={styles.diskonWrapper}>
          <Text style={styles.textDiskon}>Diskon Hingga</Text>
          <Text style={styles.persenDiskon}>60%</Text>
        </View>
      </View>
      <Image source={hadiah} style={styles.imageIklan} />
    </View>
  );
};

export default memo(DefaultAds);

const styles = StyleSheet.create({
  card: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textIklan: {
    ...FONTS.h2,
    color: COLORS.black,
  },
  diskonWrapper: {
    marginTop: 16,
  },
  textDiskon: {
    ...FONTS.body4,
    color: COLORS.lightGray,
  },
  persenDiskon: {
    fontSize: 24,
    color: COLORS.danger,
    fontWeight: 'bold',
  },
  imageIklan: {
    height: 125,
    resizeMode: 'contain',
  },
});
