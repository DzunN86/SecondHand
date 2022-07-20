import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {getNotification, ReadNotification} from '../../store/actions';
import {CustomHeader} from '../../components/atoms';
import {formatDateTime, formatRupiah, sortDate} from '../../utils';
import {useIsFocused} from '@react-navigation/native';
import {Skeleton} from '@rneui/base';
import {COLORS, RADIUS} from '../../themes';
import {EmptyState} from '../../components';
import {EmptyNotif} from '../../assets';
import {showSuccess} from '../../plugins';

function CardNotif({
  image_url,
  status,
  product_name,
  base_price,
  bid_price,
  date,
  isRead,
  onPress,
}) {
  const titleNotif = () => {
    switch (status) {
      case 'accepted':
        return 'Penawaranmu Telah Diterima';
      case 'create':
        return 'Berhasil di terbitkan';
      case 'bid':
        return 'Penawaran Produk';
      case 'declined':
        return 'Penawaran Ditolak';
      case 'Dibatalkan':
        return 'Penawaran Ditolak';
      default:
        return '';
    }
  };
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.productNotification}>
          <Image source={{uri: image_url}} style={styles.productImage}></Image>
          <View style={styles.productInfo}>
            <View style={styles.wrapperDate}>
              <Text style={styles.label}>{titleNotif()}</Text>
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
            {status == 'accepted' && (
              <Text style={styles.label}>
                Kamu akan segera dihubungi penjual via whatsapp
              </Text>
            )}
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

  const onclick = item => {
    if (item?.read === false) {
      dispatch(ReadNotification(item?.id));
    }

    switch (item?.status) {
      case 'accepted':
        showSuccess(
          'Penawaranmu telah diterima, silahkan tunggu konfirmasi dari penjual',
        );
        if (item?.Product !== null) {
          navigation.navigate('DetailBuyerOrderScreen', {
            id_order: item?.order_id,
          });
        } else {
          Alert.alert(
            'Produk Terhapus',
            'Produk ini telah dihapus oleh penjual',
          );
        }
        break;
      case 'declined':
        Alert.alert('Tawar Lagi?', 'Apakah anda menawar lagi?', [
          {text: 'Tidak', style: 'cancel'},
          {
            text: 'Ya',
            onPress: () => {
              if (item?.Product !== null) {
                navigation.navigate('DetailProductScreen', {
                  id: item?.Product?.id,
                });
              } else {
                Alert.alert(
                  'Barang tidak ditemukan',
                  'Barang yang ingin anda tawarkan tidak ditemukan, mungkin telah dihapus',
                );
              }
            },
          },
        ]);
        break;
      case 'bid':
        if (item?.Product !== null) {
          if (item?.order_id) {
            navigation.navigate('InfoPenawaranScreen', {
              id_order: item?.order_id,
            });
          } else {
            Alert.alert(
              'Order Tidak Ditemukan',
              'Order yang anda tawarkan tidak ditemukan, mungkin telah dihapus',
            );
          }
        } else {
          Alert.alert(
            'Produk Terhapus',
            'Produk ini telah dihapus oleh penjual',
          );
        }
        break;
      case 'create':
        if (item?.Product !== null) {
          navigation.navigate('DetailProductScreen', {
            id_product: item?.Product?.id,
          });
        } else {
          Alert.alert(
            'Barang tidak ditemukan',
            'Produk ini telah dihapus oleh penjual',
          );
        }
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader type="HeaderTitle" title="Notifikasi" />
      {isLoading ? (
        <>
          <LoadingNotif />
          <LoadingNotif />
          <LoadingNotif />
          <LoadingNotif />
        </>
      ) : (
        <FlatList
          data={notif?.sort(sortDate)}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
              }}
            />
          }
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
              onPress={() => onclick(item)}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() =>
            !isLoading && (
              <EmptyState
                image={EmptyNotif}
                title="Tidak ada notifikasi"
                subTitle="Notifikasis akan muncul di sini"
                style={styles.emptyState}
              />
            )
          }
        />
      )}
    </View>
  );
}
