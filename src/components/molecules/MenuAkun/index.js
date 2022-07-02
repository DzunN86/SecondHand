import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {COLORS} from '../../../themes';

export default function Menu({name, title, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.menuItem}>
          <Icon name={name} color={COLORS.primary} size={25} />
          <Text style={styles.menuItemText}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
}
  