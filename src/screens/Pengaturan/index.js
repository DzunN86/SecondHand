import { View, ScrollView } from 'react-native'
import React from 'react'
import { CustomHeader, Menu } from '../../components'
import styles from './styles'

export default function Settings({navigation}) {
  return (
    <View>
      <CustomHeader
        type="BackTitle"
        title="Pengaturan Akun"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.menuWrapper}>
        <Menu
          name="account-edit"
          title="Ubah Password"
          onPress={() => navigation.navigate('ChangePasswordScreen')}
        />
      </ScrollView>
    </View>
  )
}
