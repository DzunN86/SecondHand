import { View, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTitle from '../../components/atoms/CustomHeader/Title';
import CardSeller from '../../components/molecules/CardSeller';
import { CardCategory, CardProduct } from '../../components';
import { getProductSeller } from '../../store/actions/seller/getProduct';
import styles from './styles';
import { COLORS } from '../../themes';
import { doGetProfile } from '../../store/actions';

export default function DaftarJual({ navigation }) {
  const dispatch = useDispatch();
  const { productSeller, isLoading } = useSelector(state => state.productSellerReducers)
  const { userProfile } = useSelector(state => state.getUserReducer);
  const { userData } = useSelector(state => state.loginReducer);

  useEffect(() => {
    if (userData.access_token) {
      dispatch(doGetProfile());
      dispatch(getProductSeller());

    }
  }, [dispatch]);

  return (
    <View>
      <HeaderTitle title='Daftar Jual Saya' />
      <CardSeller
        name={userData.access_token ? userProfile.full_name || userData.name : 'Akun'}
        city={userData.access_token ? userProfile.city || userData.name : 'Akun'}
        title='Edit'
        onPress={() => navigation.navigate('InfoAkunScreen')}
        source={{ uri: userProfile.image_url }}
      />
      <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 15 }}>
        <CardCategory icon='box' active title='Produk' />
        <CardCategory icon='heart' title='Diminati' />
        <CardCategory icon='dollar-sign' title='Terjual' />
      </View>
      <View>
        {/* <TabAdd
          type='TabProduk'
          title='Tambah Produk'
          icon='plus'
          onPress={() => navigation.navigate('FormDetailScreen')}
        /> */}
        {isLoading ? (
          <ActivityIndicator
            style={{ flex: 1 }}
            size="large"
            color={COLORS.primary}
          />
        ) : (
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.cardProductWrapper}
            data={productSeller}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardProduct
                name={item.name}
                price={item.base_price}
                category={item.Categories}
                image={item.image_url}
                onPress={() => navigation.navigate('DetailProductSeller', { id: item.id })}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};
