import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {COLORS} from '../../../themes';

const IconSize = 24;
function BackHeaderLove({onPress, isLoved}) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.iconButton}>
            <Icon name="arrow-left" size={IconSize} color={COLORS.black} />
          </View>
          <View style={styles.iconButton}>
            <Octicons
              name={isLoved ? 'heart-fill' : 'heart'}
              size={IconSize}
              color={COLORS.danger}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default BackHeaderLove;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
    marginHorizontal: 16,
  },
  iconButton: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});
