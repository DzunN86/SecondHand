import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, RADIUS} from '../../../themes';
import styles from './styles';

const CardSeller = ({name, city, title, onPress, source}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCard}>
          <Image
            source={source}
            resizeMode="contain"
            style={{
              borderRadius: RADIUS.small,
              height: 50,
              width: 50,
            }}
          />
        </View>
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              color: COLORS.black,
              textTransform: 'capitalize',
              ...FONTS.h4,
            }}>
            {name}
          </Text>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
              width: '85%',
            }}>
            <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body6,
              }}>
              {city}
            </Text>
          </View>
        </View>
      </View>
      <View style={{alignContent: 'flex-end'}}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardSeller;
