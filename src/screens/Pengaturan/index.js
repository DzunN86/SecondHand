import { View } from 'react-native';
import React from 'react';
import { CustomHeader } from '../../components';

export default function Settings({navigation}) {
  return (
    <View>
       <CustomHeader
        type="BackTitle"
        title="Pengaturan Akun"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}