import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './styles'
import { FONTS, COLORS } from '../../../themes';

const CardDeskripsi = ({ title_des, deskripsi }) => {
  return (
    <View style={styles.deskripsi}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              marginTop: 10,
              color: COLORS.black,
              ...FONTS.body4,
              textTransform: 'capitalize',
            }}>
            {title_des}
          </Text>
          <View
            style={{
              marginTop: 10,
              borderWidth: 0,
              width: '100%',
            }}>
            <Text
              style={{
                color: COLORS.lightGray3,
                ...FONTS.body4,
              }}>
              {deskripsi}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CardDeskripsi
