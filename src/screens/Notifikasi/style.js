import { StyleSheet } from 'react-native'
import { COLORS } from '../../themes/theme'

export default StyleSheet.create({
    container : {
        flex: 1,
    },
    notifikasi: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
    wrapper: {
        marginLeft: 20,
        marginTop: 20
    },
    productImage: {
        width: 58,
        height: 58,
        marginLeft: 22,
        flex: 1.6
    },
    productNotification: {
        flexDirection: 'row',
        marginTop: 25,
    },
    date: {
        marginLeft: -90,
        flex: 3
    },
    productInfo: {
        marginLeft: 15,
        flex: 8
    },
    labelText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black'
    },
    label: {
        fontSize: 14
    },
    border: {
        backgroundColor: COLORS.lightGray2,
        height: 1,
        width: 350,
        alignSelf: 'center',
        marginTop: 15
    },
})