import {Pressable, ImageBackground} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {COLORS} from '../../../themes';

export default function Upload({source, name, onPress, disabled, style}) {
  return (
    <Pressable 
      onPress={onPress} disabled={disabled} style={({pressed})=>[
        { opacity: disabled ? 1 : (pressed ? 0.05 : 2) }, styles.container, style]}>
        <ImageBackground
          source={source}
          style={styles.container}
          imageStyle={{borderRadius: 15}}>
            <Icon
              name={name}
              size={35}
              color={COLORS.white}
              style={styles.icon}
            />
        </ImageBackground>
    </Pressable>
  )
}
