import {Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function Search() {
  return (
    <View>
      <View style={styles.search}>
        <TextInput
          placeholder="Cari di Second Chance"
          placeholderTextColor="grey"
          style={styles.textSearch}
        />
        <Icon 
          name="magnify" 
          color='black' 
          size={25}/>
      </View>
    </View>
  )
}

function Iklan() {
  return (
    <View>
      <View style={styles.card}>
        <View>
          <Text 
            style={styles.textIklan} 
            numberOfLines={2}>
              {'Bulan Ramadhan\nBanyak diskon!'}
          </Text>
          <View style={styles.diskonWrapper}>
            <Text style={styles.textDiskon}>
              Diskon Hingga
            </Text>
            <Text style={styles.persenDiskon}>
              60%
            </Text>
          </View>
        </View>
        <Image 
          source={require('./Ngetes/Hadiah.png')} 
          style={styles.imageIklan} />
      </View>
    </View>
  )
}

function ListSearch() {
  return (
    <TouchableOpacity>
      <View style={styles.searchKategori}>
        <Icon 
          name="magnify" 
          color='#000' 
          size={25}/>
        <Text style={{fontSize: 18}}>Semua</Text>
      </View>
    </TouchableOpacity>
  )
}

function CardProduct() {
  return (
    <TouchableOpacity>
      <View style={styles.cardProduct}>
        <Image 
          source={require('./Ngetes/Produk.png')} 
          style={styles.imageProduk} />
        <Text 
          style={styles.textCardProduct} 
          numberOfLines={1}>
            Jam Tangan Casio
        </Text>
        <Text 
          style={styles.typeProduct} 
          numberOfLines={1}>
            Aksesoris
        </Text>
        <Text 
          style={styles.textCardProduct} 
          numberOfLines={1}>
            Rp 250.000
        </Text>
      </View>
    </TouchableOpacity>
  )
}

function SearchKategori() {
  return (
    <View>
      <Text style={styles.telusuriKategori}>
        Telusuri Kategori
      </Text>
      <FlatList
        data='dari sini sampai sini'
        renderItem={({item}) => <ListSearch />}
        horizontal={true}
      />
    </View>
  )
}

function Product() {
  return (
    <View style={styles.cardProductWrapper}>
      <FlatList
        data='dari sini sampai sini'
        renderItem={({item}) => <CardProduct />}
        horizontal={true}
      />
    </View>
  )
}

export default function Home() {
  return (
    <View>
      <LinearGradient 
        colors={['#FFE9C9', '#FFE9CA', '#FFF']}> 
          <Search />
          <Iklan />
          <SearchKategori />
      </LinearGradient>
      <Product />
    </View>
  );
}
