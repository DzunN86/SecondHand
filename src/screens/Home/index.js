/* eslint-disable no-undef */
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../store/actions/home';
import {COLORS} from '../../themes';

function Search() {
  return (
    <TouchableOpacity>
      <View style={styles.search}>
        <Text style={styles.textSearch}>Cari di Second Chance</Text>
        <Icon name="search" color={COLORS.gray} size={25} />
      </View>
    </TouchableOpacity>
  );
}

function Iklan() {
  return (
    <View>
      <View style={styles.card}>
        <View>
          <Text style={styles.textIklan} numberOfLines={2}>
            {'Bulan Ramadhan\nBanyak diskon!'}
          </Text>
          <View style={styles.diskonWrapper}>
            <Text style={styles.textDiskon}>Diskon Hingga</Text>
            <Text style={styles.persenDiskon}>60%</Text>
          </View>
        </View>
        <Image
          source={require('./Ngetes/Hadiah.png')}
          style={styles.imageIklan}
        />
      </View>
    </View>
  );
}

function ListSearch() {
  return (
    <TouchableOpacity>
      <View style={styles.searchKategori}>
        <Icon name="search" color={COLORS.gray1} size={20} />
        <Text style={styles.labelCategory}>Semua</Text>
      </View>
    </TouchableOpacity>
  );
}

function CardProduct({data}) {
  const hargaConvert = `Rp. ${parseFloat(data.base_price).toLocaleString(
    'id-ID',
  )}`;
  return (
    <TouchableOpacity>
      <View style={styles.cardProduct}>
        <Image source={{uri: data.image_url}} style={styles.imageProduk} />
        <Text style={styles.textCardProduct} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.typeProduct} numberOfLines={1}>
          {data.Categories.map(item => item.name).join(', ')}
        </Text>
        <Text style={styles.textCardProduct} numberOfLines={1}>
          {hargaConvert}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function SearchKategori() {
  return (
    <View>
      <Text style={styles.telusuriKategori}>Telusuri Kategori</Text>
      <FlatList
        data="dari sini sampai sini"
        renderItem={() => <ListSearch />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function renderHeader() {
  return (
    <LinearGradient colors={['#FFE9C9', '#FFE9CA', '#FFF']}>
      <Search />
      <Iklan />
      <SearchKategori />
    </LinearGradient>
  );
}

export default function Home() {
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProduct(''));
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={{flex:1}} size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={products}
          renderItem={({item}) => <CardProduct data={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            marginTop: 10,
            flex: 1,
            justifyContent: 'space-between',
            marginHorizontal: 16,
          }}
        />
      )}
    </>
  );
}
