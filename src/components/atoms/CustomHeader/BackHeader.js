import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../themes';

const IconSize = 24;
function BackHeader({onPress}) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Icon
            name="arrow-left"
            size={IconSize}
            color={COLORS.black}
            style={{position: 'absolute', alignSelf: 'center', marginLeft: 6}}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginTop: 26,
    marginLeft: 16,
  },
});
