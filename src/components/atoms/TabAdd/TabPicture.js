import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../../themes';

const IconSize = 25
const TabPicture = ({ icon, onPress, label }) => {
    return (
        <>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity onPress={onPress} >
                <View style={styles.container}>
                    <Icon name={icon} size={IconSize} style={styles.icon} />
                </View>
            </TouchableOpacity>
        </>
    )
}

export default TabPicture

const styles = StyleSheet.create({
    container: {
        width: 96,
        height: 96,
        borderRadius: 12,
        backgroundColor: COLORS.white,
        borderColor: COLORS.grey8,
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 10,
        marginLeft: 1,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    icon: {
        color: COLORS.grey8,
        alignItems: 'center'
    },
    label: {
        color: COLORS.black,
        ...FONTS.tabBarLabel,
    },
})