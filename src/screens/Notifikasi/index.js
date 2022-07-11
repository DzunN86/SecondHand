import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
// import { product } from '../../assets'
import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from '../../store/actions/notification';
import { CustomHeader } from '../../components/atoms';
import { COLORS } from '../../themes';

function CardNotif({ navigation, image_url, status, product_name, base_price, bid_price, date }) {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('InfoPenawaranScreen')} >
        <View style={styles.productNotification}>
          <Image source={{ uri: image_url }} style={styles.productImage}></Image>
          <View style={styles.productInfo}>
            {/* Status = 
              bid = Penawaran produk,
              terima = Penawaran produk,
              create = Product Baru Anda
            */}
            <Text style={styles.label}>{status == 'bid' || status == 'terima' ? 'Penawaran produk' : 'Product Baru Anda'}</Text>
            <Text style={styles.labelText}>{product_name}</Text>
            <Text style={styles.labelText}>{base_price}</Text>
            {bid_price && (
              <Text style={styles.labelText}>{bid_price}</Text>
            )}
            <Text style={styles.label}>Kamu akan segera dihubungi penjual via whatsapp</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.label}>{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.border} />
    </>
  )
}

export default function Notifikasi({navigation}) {

  const { notif, isLoading } = useSelector(state => state.notificationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotification());
  }, []);

  return (
    <View style={styles.container}>

      {/* product 1 */}
      {isLoading ? (
        <ActivityIndicator
          style={{ flex: 1 }}
          size="large"
          color={COLORS.primary}
        />
      ) : (
        <FlatList
          data={notif}
          renderItem={({ item }) => <CardNotif image_url={item.image_url} status={item.status} product_name={item.product_name} base_price={item.base_price} bid_price={item.bid_price} date={item.createdAt} navigation={navigation} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<CustomHeader
            type="HeaderTitle"
            title="Notifikasi"
          />}
        />
      )}
    </View>
  );
}
