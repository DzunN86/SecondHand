import {View, ImageBackground, ScrollView} from 'react-native';
import React, {useEffect, createRef, useCallback} from 'react';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {CustomButton, CustomHeader, CardFoto, CardDeskripsi, CardProduk} from '../../components';
import {SIZES} from '../../themes';
import {getDetailSeller, deleteProductSeller, getProductSeller} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const thisRef = createRef();
const anim = new Animated.Value(1);
const DetailProductSeller = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  const {detailProduk} = useSelector(state => state.detailSellerReducer);
  const {userProfile} = useSelector(state => state.getUserReducer);

  useEffect(() => {
    dispatch(getDetailSeller(id));
  }, [id]);

  const Delete = useCallback(() => {
    dispatch(deleteProductSeller(id, navigation));
    dispatch(getProductSeller());
  }, [dispatch, id]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{minHeight: SIZES.height - 5}}>
          <ImageBackground
            source={{uri: detailProduk?.image_url}}
            style={styles.bgProduk}>
            <CustomHeader
              type="BackHeader"
              onPress={() => navigation.navigate('MainApp')}
            />
          </ImageBackground>
          <View style={styles.containerKeterangan}>
            <CardProduk
              nameProduk={detailProduk?.name ? detailProduk.name : '-'}
              kategori={detailProduk?.Categories}
              price={detailProduk?.base_price}
            />
            <CardFoto
              text1={userProfile.full_name}
              text2={detailProduk?.location}
              source={{uri: userProfile.image_url}}
            />
            <CardDeskripsi
              title="Deskripsi"
              deskripsi={detailProduk?.description}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 16,
        paddingHorizontal: 16,
      }}>
        <CustomButton
          primary
          type="daftarjual"
          title="Edit"
          onPress={() => onPressTerbit(values)}
        />
        <CustomButton
          danger
          type="daftarjual"
          title="Hapus"
          onPress={() => Delete()}
        />
      </View>
    </View>
  );
};

export default DetailProductSeller;
