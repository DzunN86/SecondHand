import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';

export default function CardFoto({text1, text2, source, style, onPress, title, stylee}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperPenjual}>
        <Image
          resizeMode="contain"
          style={styles.imagePenjual}
          source={source}
        />
        <View>
          <Text style={styles.namaPenjual}>{text1}</Text>
          <Text style={[styles.namaKota, style]}>{text2}</Text>
        </View>
        <TouchableOpacity onPress={onPress} style={[styles.button, stylee]}>
          <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
