import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../themes'
import Icon from 'react-native-vector-icons/Feather'

const IconSize = 24
function BackHeader() {
  return (
    <View style={styles.container}>
      <Icon name='arrow-left' size={IconSize} color={COLORS.black} />
    </View>
  )
}

export default BackHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    paddingLeft: SIZES.padding,
    paddingRight: SIZES.padding2,
    flexDirection: 'row',
    alignItems: 'center',
  },
})