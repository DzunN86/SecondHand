import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../../themes'
import Icon from 'react-native-vector-icons/Feather'

const IconSize = 24
function BackTitle({ title, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name='arrow-left' size={IconSize} color={COLORS.black} onPress={onPress} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default BackTitle

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingVertical: 30,
        paddingLeft: SIZES.padding,
        paddingRight: SIZES.padding2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    title:{
        fontSize: 20,
        color: COLORS.black,
        marginTop: 4,
        alignSelf: 'center'
    }

})