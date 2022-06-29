import { View, ScrollView } from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/atoms/CustomHeader/Title';
import CardSeller from '../../components/molecules/CardSeller';
import TabAdd from '../../components/atoms/TabAdd';
import { CardCategory } from '../../components';

export default function DaftarJual({ navigation }) {
  return (
    <View>
      <HeaderTitle title='Daftar Jual Saya' />
      <CardSeller 
      name='Nama penjual'
      city='Kota'
      title='Edit'
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' , marginTop: 10}}>
          <CardCategory icon='box' active title='Produk' />
          <CardCategory icon='heart' title='Diminati' />
          <CardCategory icon='dollar-sign' title='Terjual' />
        </View>
      </ScrollView>
      <TabAdd title='Tambah Produk' icon='plus' onPress={() => navigation.navigate('FormDetailScreen')}/>
    </View>
  );
}
