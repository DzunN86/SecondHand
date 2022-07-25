import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyNotif} from '../../assets';
import {CardNotif, EmptyState, LoadingNotif} from '../../components';
import {CustomHeader} from '../../components/atoms';
import {showSuccess} from '../../plugins';
import {getNotification, ReadNotification} from '../../store/actions';
import {sortDate} from '../../utils';
import styles from './style';

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
      case 'tolak':
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
