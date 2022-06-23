import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import BackTitle from '../../components/atoms/CustomHeader/BackTitle';
import { CustomInput, CustomButton } from '../../components/atoms/';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const IconSize = 35
const TabAdd = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.container}>
        <Icon name={icon} size={IconSize} style={styles.icon} />
      </View>
    </TouchableOpacity>
  )
}
export default function FormDetail({ navigation }) {
  return (
    <>
      <BackTitle title='Lengkapi Detail Produk' onPress={() => navigation.navigate('Daftar Jual')} />
      <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
        <CustomInput label="Nama Produk" placeholder="Nama Produk" />
        <CustomInput label="Harga Produk" placeholder='Rp 0,00' />
        <CustomInput label="Kategori" placeholder='Pilih Kategori' />
        <CustomInput
          label="Deskripsi"
          placeholder='Contoh: Jalan Ikan Kerapu 21'
        />
        <Text style={styles.titleText}>Foto Produk</Text>
        <TabAdd
          icon='plus'
        />
      </View>
      <View style={{ marginVertical: 210, marginHorizontal: 25, flexDirection: 'column' }}>
        <CustomButton primary title='Preview' style={styles.button1} onPress={() => navigation.navigate('')} />
        <CustomButton primary title='Terbitkan' style={styles.button2} onPress={() => navigation.navigate('')} />
      </View>
    </>
  );
}
