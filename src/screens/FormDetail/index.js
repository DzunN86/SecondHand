import { Text, View } from 'react-native';
import React from 'react';
import BackTitle from '../../components/atoms/CustomHeader/BackTitle';
import Input from '../../components/atoms/CustomInput'
import { COLORS } from '../../themes';

export default function FormDetail({ navigation }) {
  return (
    <>
      <BackTitle title='Lengkapi Detail Produk' onPress={() => navigation.navigate('Daftar Jual')} />
      <View style={{ marginVertical: 20, marginHorizontal: 25 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.black }}>Nama Produk</Text>
        <Input value='Nama Produk' />
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.black }}>Harga Produk</Text>
        <Input value='Rp 0,00' />
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.black }}>Kategori</Text>
        <Input value='Pilih Kategori' />
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.black }}>Harga Produk</Text>
        <Input value='Pilih Kategori' style={{ height: 50 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.black }}>Foto Produk</Text>
      </View>
    </>
  );
}
