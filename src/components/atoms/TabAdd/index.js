import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../themes';

const IconSize = 35
const TabAdd = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <Icon name={icon} size={IconSize} style={styles.icon} />
                <Text style={styles.textButton}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default TabAdd

const styles = StyleSheet.create({
    container: {
        width: 156,
        height: 260,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        borderColor: COLORS.lightGray2,
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    textButton: {
        color: COLORS.lightGray2,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    },
    icon: {
        color: COLORS.lightGray2,
        alignItems: 'center'
    }
})