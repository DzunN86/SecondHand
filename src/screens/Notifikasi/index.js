import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
// import { product } from '../../assets'
import {useDispatch, useSelector} from 'react-redux';
import {getNotification} from '../../store/actions/notification';
import {CustomHeader} from '../../components/atoms';
import {formatDateTime, formatRupiah} from '../../utils';
import { useIsFocused } from '@react-navigation/native';

function CardNotif({
  navigation,
  image_url,
  status,
  product_name,
  base_price,
  bid_price,
  date,
  isRead,
}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('InfoPenawaranScreen')}>
        <View style={styles.productNotification}>
          <Image source={{uri: image_url}} style={styles.productImage}></Image>
          <View style={styles.productInfo}>
            <View style={styles.wrapperDate}>
              <Text style={styles.label}>
                {status == 'bid' || status == 'terima'
                  ? 'Penawaran produk'
                  : 'Produk Baru Anda'}
              </Text>
              <View style={styles.wrapper}>
                <Text style={styles.label}>{formatDateTime(date)}</Text>
                {!isRead && <View style={styles.isRead} />}
              </View>
            </View>
            <Text style={styles.labelText}>{product_name}</Text>
            <Text
              style={[
                styles.labelText,
                bid_price ? styles.strike_through : null,
              ]}>
              {formatRupiah(base_price)}
            </Text>
            {bid_price && (
              <Text style={styles.labelText}>{'Ditawar ' + formatRupiah(bid_price)}</Text>
            )}
            {status == 'bid' || status == 'terima' ? (
              <Text style={styles.label}>
                Kamu akan segera dihubungi penjual via whatsapp
              </Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default function Notifikasi({navigation}) {
  const {notif} = useSelector(state => state.notificationReducer);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(getNotification());
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FlatList
        data={notif}
        renderItem={({item}) => (
          <CardNotif
            image_url={item.image_url}
            status={item.status}
            product_name={item.product_name}
            base_price={item.base_price}
            bid_price={item.bid_price}
            date={item.createdAt}
            navigation={navigation}
            isRead={item.read}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <CustomHeader type="HeaderTitle" title="Notifikasi" />
        }
      />
    </View>
  );
}
