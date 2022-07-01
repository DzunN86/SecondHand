import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../store/actions/home';
import {COLORS} from '../../themes';
import {
  CardCategory,
  CardProduct,
  DefaultAds,
  SearchBar,
} from '../../components';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProduct(''));
  }, []);

  const renderHeader = () => (
    <LinearGradient colors={['#FFE9C9', '#FFE9CA', '#FFF']}>
      <SearchBar onPress={() => navigation.navigate('SearchProductScreen')} />
      <DefaultAds />
      <View>
        <Text style={styles.telusuriKategori}>Telusuri Kategori</Text>
        <FlatList
          data="dari sini sampai sini"
          renderItem={() => <CardCategory title="Semua" icon="box" active />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          size="large"
          color={COLORS.primary}
        />
      ) : (
        <FlatList
          ListHeaderComponent={renderHeader}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.cardProductWrapper}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardProduct
              name={item.name}
              category={item.Categories}
              price={item.base_price}
              image={item.image_url}
              onPress={() => navigation.navigate('DetailProductScreen', {id_product: item.id})}
            />
          )}
          ListEmptyComponent={() => (
            <Text>Tidak ada produk yang ditemukan</Text>
          )}
        />
      )}
    </>
  );
}
