import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from './style';

export default function CardFoto({text1, text2, source, style}) {
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
      </View>
    </View>
  );
};
