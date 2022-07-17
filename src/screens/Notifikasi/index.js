import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
// import { product } from '../../assets'
import {useDispatch, useSelector} from 'react-redux';
import {getNotification} from '../../store/actions/notification';
import {CustomHeader} from '../../components/atoms';
import {formatDateTime, formatRupiah} from '../../utils';
import {useIsFocused} from '@react-navigation/native';
import {Skeleton} from '@rneui/base';
import {COLORS, RADIUS} from '../../themes';

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
              <Text style={styles.labelText}>
                {'Ditawar ' + formatRupiah(bid_price)}
              </Text>
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

function LoadingNotif() {
  return (
    <View style={styles.productNotification}>
      <Skeleton
        animation="pulse"
        width={60}
        height={60}
        backgroundColor={COLORS.grey7}
        skeletonStyle={{backgroundColor: COLORS.grey3}}
        style={{
          borderRadius: RADIUS.small,
        }}
      />
      <View style={styles.productInfo}>
        <View style={styles.wrapperDate}>
          <Skeleton
            animation="pulse"
            width={150}
            backgroundColor={COLORS.grey7}
            skeletonStyle={{backgroundColor: COLORS.grey3}}
            style={{
              borderRadius: RADIUS.small,
            }}
          />
          <Skeleton
            animation="pulse"
            width={50}
            backgroundColor={COLORS.grey7}
            skeletonStyle={{backgroundColor: COLORS.grey3}}
            style={{
              borderRadius: RADIUS.small,
            }}
          />
        </View>
        <Skeleton
          animation="pulse"
          width={100}
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
          style={{
            marginTop: 15,
            borderRadius: RADIUS.small,
          }}
        />
        <Skeleton
          animation="pulse"
          width={70}
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
          style={{
            marginTop: 15,
            borderRadius: RADIUS.small,
          }}
        />
      </View>
    </View>
  );
}

export default function Notifikasi({navigation}) {
  const {notif, isLoading} = useSelector(state => state.notificationReducer);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getNotification());
    setRefreshing(false);
  }, [isFocused, refreshing]);

  return (
    <View style={styles.container}>
      <CustomHeader type="HeaderTitle" title="Notifikasi" />

      <FlatList
        data={notif}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
            }}
          />
        }
        renderItem={({item}) =>
          isLoading ? (
            <LoadingNotif />
          ) : (
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
          )
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
