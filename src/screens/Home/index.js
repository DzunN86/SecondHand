import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {CardAds, CardCategory, CardProduct, SearchBar} from '../../components';
import {getBanners, getProduct} from '../../store/actions/home';
import {getKategori} from '../../store/actions/kategori';
import { SIZES } from '../../themes';
import styles from './styles';

export default function Home({navigation}) {
  const [btnActive, setBtnActive] = useState('');
  const [btnAllActive, setBtnAllActive] = useState(true);
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.homeReducer);
  const {category} = useSelector(state => state.categoryReducer);

  useEffect(() => {
    dispatch(getProduct(''));
    dispatch(getKategori());
    dispatch(getBanners());
  }, []);

  const getProductByCategory = useCallback(
    categoryId => {
      setBtnAllActive(false);
      setBtnActive(categoryId);
      dispatch(getProduct(`?category_id=${categoryId}`));
    },
    [dispatch, btnActive],
  );

  const getAllProduct = useCallback(() => {
    setBtnActive(false);
    setBtnAllActive(true);
    dispatch(getProduct('/'));
  }, [dispatch, btnActive]);

  const renderHeader = () => (
    <LinearGradient colors={['#FFE9C9', '#FFE9CA', '#FFF']}>
      <SearchBar onPress={() => navigation.navigate('SearchProductScreen')} />
      <CardAds />
      <View>
        <Text style={styles.telusuriKategori}>Telusuri Kategori</Text>
        <View style={styles.categoryList}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: SIZES.base}}>
            <CardCategory
              title="Semua"
              icon="search"
              active={btnAllActive}
              onPress={() => getAllProduct()}
            />
            {category.map(item => (
              <CardCategory
                title={item.name}
                key={item.id}
                icon="box"
                active={btnActive === item.id}
                onPress={() => getProductByCategory(item.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );

  const renderItem = useCallback(
    ({item}) => (
      <CardProduct
        name={item.name}
        category={item.Categories}
        price={item.base_price}
        image={item.image_url}
        onPress={() =>
          navigation.navigate('DetailProductScreen', {
            id_product: item.id,
          })
        }
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const ITEM_HEIGHT = 200;

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <>
      <FlatList
        ListHeaderComponent={renderHeader}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.cardProductWrapper}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={() => <Text>Tidak ada produk yang ditemukan</Text>}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={1000}
        windowSize={60}
        updateCellsBatchingPeriod={50}
        initialNumToRender={7}
      />
    </>
  );
}
