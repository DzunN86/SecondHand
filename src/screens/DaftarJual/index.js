import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardCategory, CardProduct, TabAdd} from '../../components';
import HeaderTitle from '../../components/atoms/CustomHeader/Title';
import CardSeller from '../../components/molecules/CardSeller';
import {doGetProfile} from '../../store/actions';
import {getProductSeller} from '../../store/actions/seller/getProduct';
import {SIZES} from '../../themes';

export default function DaftarJual({navigation}) {
  const dispatch = useDispatch();
  const {productSeller} = useSelector(state => state.productSellerReducers);
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {userData} = useSelector(state => state.loginReducer);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(doGetProfile());
      dispatch(getProductSeller());
    }
  }, [dispatch, isFocused]);

  return (
    <ScrollView>
      <HeaderTitle title="Daftar Jual Saya" />
      <CardSeller
        name={
          userData.access_token
            ? userProfile.full_name || userData.name
            : 'Akun'
        }
        city={
          userData.access_token ? userProfile.city || userData.name : 'Akun'
        }
        title="Edit"
        onPress={() => navigation.navigate('InfoAkunScreen')}
        source={{uri: userProfile.image_url}}
      />
      <View style={{flexDirection: 'row', marginTop: 16, marginHorizontal: 15}}>
        <CardCategory icon="box" active title="Produk" />
        <CardCategory icon="heart" title="Diminati" />
        <CardCategory icon="dollar-sign" title="Terjual" />
      </View>
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
    </ScrollView>
  );
}
