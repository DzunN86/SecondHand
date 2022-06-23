import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../../../themes';
import styles from './styles';

const CardSeller = ({ name, city, title, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.subCard}>
                    <Image
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
                            fontWeight: 'bold',
                            fontFamily: 'Poppins-SemiBold',
                            fontSize: 22,
                            textTransform: 'capitalize',
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
                                fontFamily: 'Poppins-Regular',
                                fontSize: 14
                            }}>
                            {city}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ alignContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.button}
                >
                    <Text
                        style={styles.textButton}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardSeller