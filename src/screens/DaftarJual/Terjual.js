import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardProduct, TabAdd} from '../../components';
import {getProductSeller} from '../../store/actions';
import {SIZES} from '../../themes';

const Terjual = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {productSeller} = useSelector(state => state.productSellerReducers);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getProductSeller());
    }
  }, [dispatch, isFocused]);
  return (
    <View
      style={{
        flexWrap: 'wrap',
        marginVertical: SIZES.base,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
      }}>
      {productSeller.length < 5 && (
        <TabAdd
          type="TabProduk"
          title="Tambah Produk"
          icon="plus"
          onPress={() => navigation.navigate('FormDetailScreen')}
        />
      )}
      {productSeller.map(item => (
        <View key={item.id} style={{marginBottom: SIZES.base}}>
          <CardProduct
            name={item.name}
            price={item.base_price}
            category={item.Categories}
            image={item.image_url}
            onPress={() =>
              navigation.navigate('DetailProductSeller', {id: item.id})
            }
          />
        </View>
      ))}
    </View>
  );
};

export default Terjual;
