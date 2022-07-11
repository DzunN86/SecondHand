import {Text, View, FlatList} from 'react-native';
import React, {useEffect, useCallback, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../store/actions/home';
import {
  CardCategory,
  CardProduct,
  DefaultAds,
  SearchBar,
} from '../../components';
import {getKategori} from '../../store/actions/kategori';

export default function Home({navigation}) {
  const [btnActive, setBtnActive] = useState('');
  const [btnAllActive, setBtnAllActive] = useState(true);
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.homeReducer);
  const {category} = useSelector(state => state.categoryReducer);

  useEffect(() => {
    dispatch(getProduct(''));
    dispatch(getKategori());
  }, []);

  const getProductByCategory = useCallback(
    categoryId => {
      setBtnActive(categoryId);
      setBtnAllActive(false);
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
      <DefaultAds />
      <View>
        <Text style={styles.telusuriKategori}>Telusuri Kategori</Text>
        <View style={styles.categoryList}>
          <View style={{paddingLeft: 16}}>
            <CardCategory
              title="Semua"
              icon="search"
              active={btnAllActive}
              onPress={() => getAllProduct()}
            />
          </View>
          <FlatList
            data={category}
            renderItem={({item}) => (
              <CardCategory
                title={item.name}
                icon="box"
                active={btnActive === item.id}
                onPress={() => getProductByCategory(item.id)}
              />
            )}
            horizontal={true}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
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
        initialNumToRender={50}
      />
    </>
  );
}
