import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {CardBuyer, CustomButton, CustomHeader} from '../../components';
import {getDetailOrderSeller} from '../../store/actions/seller/getSellerOrder';
import {COLORS} from '../../themes';
import {formatDateTime, formatRupiah} from '../../utils';
import styles from './style';

export default function InfoPenawaran({navigation, route}) {
  const {id_order} = route.params;
  const dispatch = useDispatch();
  const {detailOrderSeller, isLoading} = useSelector(
    state => state.orderSellerReducers,
  );

  useEffect(() => {
    dispatch(getDetailOrderSeller(id_order));
  }, []);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <CustomHeader
        type="BackTitle"
        title="Info Penawaran"
        onPress={() => navigation.goBack()}
      />
      <CardBuyer
        city={detailOrderSeller?.User.city}
        name={detailOrderSeller?.User.full_name}
      />
      <View>
        <Text style={styles.LabelPenawaran}>Daftar Produkmu Yang Ditawar</Text>
        <TouchableOpacity>
          <View style={styles.productNotification}>
            <Image
              source={{uri: detailOrderSeller?.Product.image_url}}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <View style={styles.wrapperDate}>
                <Text style={styles.label}>Penawaran produk</Text>
                <Text style={styles.label}>
                  {formatDateTime(detailOrderSeller?.createdAt)}
                </Text>
              </View>
              <Text style={styles.labelText}>
                {detailOrderSeller?.product_name}
              </Text>
              <Text style={[styles.labelText, styles.strike_through]}>
                {formatRupiah(detailOrderSeller?.base_price)}
              </Text>
              <Text style={styles.labelText}>
                Ditawar {formatRupiah(detailOrderSeller?.price)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginVertical: 25,
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CustomButton primary title="Tolak" style={styles.button1} />
          <CustomButton primary title="Terima" style={styles.button2} />
        </View>
      </View>
    </View>
  );
}
