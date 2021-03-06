import React, {useCallback, useEffect, useState} from 'react';
import {useMemo} from 'react';
import {FlatList, RefreshControl, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {EmptySearch} from '../../assets';
import {
  CardAds,
  CardCategory,
  CardProduct,
  CustomButton,
  EmptyState,
  SearchBar,
} from '../../components';
import {getBanners, getNextProduct, getProduct} from '../../store/actions/home';
import {getKategori} from '../../store/actions/kategori';
import {SIZES} from '../../themes';
import {sortDate} from '../../utils';
import styles from './styles';

export default function Home({navigation}) {
  const [Fcategory, setFCategory] = useState(0);
  const [perPage, setPerpage] = useState(10);
  const dispatch = useDispatch();
  const {products, isLoading, nextLoading} = useSelector(state => state.homeReducer);
  const {category} = useSelector(state => state.categoryReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
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
  }, [Fcategory, refreshing]);
  
  useEffect(() => {
    dispatch(
      getNextProduct({
        search: '',
        category_id: Fcategory !== 0 ? Fcategory : '',
        status: 'available',
        page: 1,
        per_page: perPage,
      }),
    );
  }, [perPage]);

  useEffect(() => {
    dispatch(getKategori());
    dispatch(getBanners());
  }, []);

  const renderHeaderComponent = useMemo(
    () => (
      <LinearGradient colors={['#AADEE9', '#D2ECF2', '#FFF']}>
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
    ),
    [Fcategory],
  );

  const renderFooter = useMemo(
    () =>
      products?.length > 0 && (
        <View style={{paddingHorizontal: 16, marginTop: 10}}>
          <CustomButton
            primary
            loading={nextLoading}
            disabled={nextLoading}
            title="Show More"
            onPress={() => setPerpage(perPage + 10)}
          />
        </View>
      ),
    [nextLoading],
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
        data={products?.sort(sortDate)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={1000}
        windowSize={60}
        updateCellsBatchingPeriod={50}
        initialNumToRender={7}
        ListEmptyComponent={() =>
          !isLoading && (
            <EmptyState
              image={EmptySearch}
              title="Tidak ada hasil yang ditemukan"
              subTitle="Coba sesuaikan pencarian Anda
            untuk menemukan apa yang Anda cari"
            />
          )
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setPerpage(10);
            }}
          />
        }
        ListFooterComponent={renderFooter}
      />
    </>
  );
}
