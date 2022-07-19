import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Skeleton} from '@rneui/base';
import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder} from '../../assets';
import {CustomHeader, EmptyState} from '../../components';
import {fetchBuyerOrder} from '../../store/actions/buyer/buyerOrder';
import {COLORS, RADIUS} from '../../themes';
import {formatDateTime, formatRupiah} from '../../utils';
import styles from './styles';

function CardBuyerOrder({
  image_url,
  status,
  product_name,
  base_price,
  bid_price,
  date,
  onPress,
}) {
  const getBgColor = () => {
    if (status == 'pending') {
      return COLORS.accent;
    }
    if (status == 'declined') {
      return COLORS.danger;
    }
  };
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.productNotification}>
          <Image source={{uri: image_url}} style={styles.productImage}></Image>
          <View style={styles.productInfo}>
            <View style={styles.wrapperDate}>
              <Text style={styles.labelText}>{product_name}</Text>
              <Text style={styles.label}>{formatDateTime(date)}</Text>
            </View>
            <Text
              style={[
                styles.labelText,
                bid_price ? styles.strike_through : null,
              ]}>
              {formatRupiah(base_price)}
            </Text>
            <View style={styles.wrapper}>
              {bid_price && (
                <Text style={styles.labelText}>
                  {'Ditawar ' + formatRupiah(bid_price)}
                </Text>
              )}
              <View
                style={[styles.badgeStatus, {backgroundColor: getBgColor()}]}>
                <Text style={styles.labelStatus}>{status}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

function LoadingCard() {
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
            marginTop: 10,
            borderRadius: RADIUS.small,
          }}
        />
        <View style={styles.wrapper}>
          <Skeleton
            animation="pulse"
            width={70}
            backgroundColor={COLORS.grey7}
            skeletonStyle={{backgroundColor: COLORS.grey3}}
            style={{
              marginTop: 10,
              borderRadius: RADIUS.small,
            }}
          />
          <Skeleton
            animation="pulse"
            width={20}
            backgroundColor={COLORS.grey7}
            skeletonStyle={{backgroundColor: COLORS.grey3}}
            style={{
              marginTop: 10,
              borderRadius: RADIUS.small,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const BuyerOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataBuyerOrder, isLoading} = useSelector(state => state.buyerReducer);
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(fetchBuyerOrder());
  }, [isFocused]);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 5,
      }}>
      <FlatList
        data={dataBuyerOrder}
        ListHeaderComponent={() => (
          <CustomHeader
            type="BackTitle"
            title="Daftar Order Saya"
            onPress={() => navigation.goBack()}
          />
        )}
        keyExtractor={item => item?.id}
        ListEmptyComponent={() => (
          <EmptyState
            image={EmptyOrder}
            title="Anda Tidak Memeiliki Order"
            subTitle="Yuk lihat apa yang sedang trending"
            labelBtn="Lihat Produk"
            onPress={() => navigation.navigate('Home')}
          />
        )}
        renderItem={({item}) =>
          isLoading ? (
            <LoadingCard />
          ) : (
            <CardBuyerOrder
              key={'diminati' + item.id}
              product_name={item.Product?.name}
              date={item.transaction_date}
              base_price={item.base_price}
              bid_price={item.price}
              status={item.status}
              image_url={item.Product?.image_url}
              onPress={() =>
                navigation.navigate('DetailBuyerOrderScreen', {
                  id_order: item.id,
                })
              }
            />
          )
        }
      />
    </View>
  );
};

export default BuyerOrder;
