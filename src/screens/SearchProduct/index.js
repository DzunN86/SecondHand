import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {EmptySearch} from '../../assets';
import {CardProduct, EmptyState} from '../../components';
import {getProduct} from '../../store/actions/home';
import {COLORS} from '../../themes';
import styles from './styles';

const SearchProduct = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [onSearch, setOnSearch] = useState(false);
  const {products} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchQuery) {
        setOnSearch(true);
        dispatch(
          getProduct({
            search: searchQuery,
            category_id: '',
            status: 'available',
            page: 1,
            per_page: 10,
          }),
        );
      } else {
        setOnSearch(false);
      }
    }, 500);
    return () => {
      clearTimeout(getData);
      dispatch(
        getProduct({
          search: '',
          category_id: '',
          status: 'available',
          page: 1,
          per_page: 10,
        }),
      );
    };
  }, [dispatch, searchQuery]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.search}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Icon name="search" color={COLORS.gray} size={20} />
          <TextInput
            onChangeText={e => setSearchQuery(e)}
            value={searchQuery}
            style={styles.textInput}
            placeholder="Cari produk"
            autoFocus
          />
          {onSearch && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Icon name="x" color={COLORS.primary} size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {onSearch ? (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
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
          )}
          ListEmptyComponent={() => (
            <EmptyState
              image={EmptySearch}
              title="Tidak ada hasil yang ditemukan"
              subTitle="Coba sesuaikan pencarian Anda
              untuk menemukan apa yang Anda cari"
              labelBtn="Lihat Produk"
              style={{marginTop: 20, paddingHorizontal: 9}}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.cardProductWrapper}
        />
      ) : null}
    </SafeAreaView>
  );
};
export default SearchProduct;
