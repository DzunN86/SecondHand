import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../../themes';
import {CustomButton} from '../../atoms';

const EmptyState = ({image, title, subTitle, onPress, labelBtn, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {onPress && (
        <CustomButton
          style={{width: '75%', marginTop: 16}}
          primary
          title={labelBtn}
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {...FONTS.h2, color: COLORS.black, textAlign: 'center'},
  subTitle: {...FONTS.body3, color: COLORS.grey1, textAlign: 'center', marginTop: 8},
});
