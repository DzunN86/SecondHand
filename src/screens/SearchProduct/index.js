import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, SIZES, RADIUS} from '../../themes';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../store/actions/home';
import {CardProduct} from '../../components';

const SearchProduct = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [onSearch, setOnSearch] = useState(false);
  const {isLoading, products} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchQuery) {
        setOnSearch(true);
        dispatch(getProduct(`?search=${searchQuery}`));
      } else {
        setOnSearch(false);
      }
    }, 500);
    return () => {
      clearTimeout(getData);
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
        </View>
      </View>
      {onSearch ? (
        isLoading ? (
          <ActivityIndicator
            style={{flex: 1}}
            size="large"
            color={COLORS.primary}
          />
        ) : (
          <FlatList
            data={products}
            renderItem={({item}) => (
              <CardProduct
                name={item.name}
                category={item.Categories}
                price={item.base_price}
                image={item.image_url}
                onPress={() => navigation.navigate('DetailProductScreen')}
              />
            )}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => (
              <Text style={styles.textEmpty}>
                Tidak ada produk yang ditemukan
              </Text>
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.cardProductWrapper}
          />
        )
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1},
  search: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.base,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowOpacity: 0.3,
  },
  inputContainer: {
    flex: 1,
    marginLeft: SIZES.base,
    backgroundColor: '#F0F3F8',
    borderRadius: RADIUS.small,
    height: 45,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  cardProductWrapper: {
    marginTop: 10,
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
});
export default SearchProduct;
