import { Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/atoms/CustomHeader/Title';
import CardCategory from '../../components/atoms/CustomCard';
import CardSeller from '../../components/molecules/CardSeller';
import TabAdd from '../../components/atoms/TabAdd';

export default function DaftarJual() {
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
          <CardCategory icon='box' title='Produk' />
          <CardCategory icon='heart' title='Diminati' />
          <CardCategory icon='dollar-sign' title='Terjual' />
        </View>
      </ScrollView>
      <TabAdd title='Tambah Produk' icon='plus'/>
    </View>
  );
}
