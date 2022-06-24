import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../themes'

function HeaderTitle({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingVertical: 20,
        paddingLeft: SIZES.padding,
        paddingRight: SIZES.padding2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    title: {
        ...FONTS.h2,
        color: COLORS.black,
        marginTop: 4,
    }
})