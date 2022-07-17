import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';

export default function CardDeskripsi({title, deskripsi}) {
  return (
    <View style={styles.deskripsi}>
      <View style={styles.wrapperDeskripsi}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.deskripsiText}>{deskripsi}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
