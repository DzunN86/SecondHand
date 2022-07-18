import {Pressable, ImageBackground, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {COLORS} from '../../../themes';

export default function Upload({source, name, onPress, disabled, style}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        {opacity: disabled ? 1 : pressed ? 0.05 : 2},
        {width: 100, height: 100},
        style,
      ]}>
      {source === '-' ? (
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 15,
            borderStyle: 'dashed',
            borderWidth: 2,
            borderColor: COLORS.grey3,
            justifyContent: 'center',
          }}>
          <Icon
            name={name}
            size={35}
            color={COLORS.grey2}
            style={styles.icon}
          />
        </View>
      ) : (
        <ImageBackground
          source={{uri: source}}
          style={{
            height: 100,
            width: 100,
            borderRadius: 15,
            borderColor: COLORS.grey3,
            justifyContent: 'center',
          }}
          imageStyle={{borderRadius: 15}}>
          <Icon
            name={name}
            size={35}
            color={COLORS.grey2}
            style={styles.icon}
          />
        </ImageBackground>
      )}
    </Pressable>
  );
}
