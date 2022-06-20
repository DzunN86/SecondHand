import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES} from '../../../themes'

function Title({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default Title

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
    title: {
        fontSize: 20,
        color: COLORS.black,
        marginTop: 4,
    }
})