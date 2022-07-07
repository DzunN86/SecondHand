import { Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../../../themes';
import styles from './style';

const CardBuyer = ({ name, city, source }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.subCard}>
                    <Image
                        source={source}
                        resizeMode="contain"
                        style={{
                            borderRadius: 15,
                            height: 50,
                            width: 50,
                        }}
                    />
                </View>
                <View style={{ marginLeft: 12 }}>
                    <Text
                        style={{
                            color: COLORS.black,
                            textTransform: 'capitalize',
                            ...FONTS.body4,
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
                                width: 100
                            }}>
                            {city}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardBuyer