import {Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/atoms/CustomHeader';

export default function Login({navigation}) {
  return (
    <View>
      <CustomHeader type='BackTitle'  onPress={() => navigation.navigate('')}/>
    </View>
  );
}
