import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../../themes';

const IconSize = 25
const TabProduk = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <Icon name={icon} size={IconSize} style={styles.icon} />
                <Text style={styles.textButton}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TabProduk

const styles = StyleSheet.create({
    container: {
        width: 156,
        height: 206,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        borderColor: COLORS.grey8,
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'dashed'
        
    },
    textButton: {
        color: COLORS.grey8,
        ...FONTS.body5,
        alignSelf: 'center',
        marginTop: 10,
    },
    icon: {
        color: COLORS.grey8,
        alignItems: 'center'
    }
})