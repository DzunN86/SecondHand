import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  CardAds,
  CardCategory,
  CardProduct,
  CustomButton,
  SearchBar,
} from '../../components';
import {getBanners, getProduct} from '../../store/actions/home';
import {getKategori} from '../../store/actions/kategori';
import {SIZES} from '../../themes';
import styles from './styles';

export default function Home({navigation}) {
  const [Fcategory, setFCategory] = useState(0);
  const [perPage, setPerpage] = useState(10);
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector(state => state.homeReducer);
  const {category} = useSelector(state => state.categoryReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getBanners());
    dispatch(getKategori());
    dispatch(
      getProduct({
        search: '',
        category_id: Fcategory !== 0 ? Fcategory : '',
        status: 'available',
        page: 1,
        per_page: perPage,
      }),
    );
    setRefreshing(false);
  }, [Fcategory, refreshing, perPage]);

  const renderHeaderComponent = () => (
    <LinearGradient colors={['#FFE9C9', '#FFE9CA', '#FFF']}>
      <SearchBar onPress={() => navigation.navigate('SearchProductScreen')} />
      <CardAds />
      <View>
        <Text style={styles.telusuriKategori}>Telusuri Kategori</Text>
        <View style={styles.categoryList}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft: SIZES.base}}>
            <CardCategory
              title="Semua"
              icon="search"
              active={Fcategory === 0}
              onPress={() => setFCategory(0)}
            />
            {category.map(item => (
              <CardCategory
                title={item.name}
                key={item.id}
                icon="box"
                active={Fcategory === item?.id}
                onPress={() => setFCategory(item?.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );

  const renderFooter = () => (
    <View style={{paddingHorizontal: 16, marginTop: 10}}>
      <CustomButton
        primary
        loading={isLoading}
        disabled={isLoading}
        title="Show More"
        onPress={() => setPerpage(perPage + 10)}
      />
    </View>
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
        ListHeaderComponent={renderHeaderComponent}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.cardProductWrapper}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={1000}
        windowSize={60}
        updateCellsBatchingPeriod={50}
        initialNumToRender={7}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
          />
        }
        ListFooterComponent={!isLoading ? renderFooter : null}
      />
    </>
  );
}
