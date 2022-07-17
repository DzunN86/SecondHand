import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Skeleton} from '@rneui/base';
import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getOrderSeller} from '../../store/actions/seller/getSellerOrder';
import {COLORS, RADIUS} from '../../themes';
import {formatDateTime, formatRupiah} from '../../utils';
import styles from './styles';

function CardDiminati({
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
        animation="wave"
        width={60}
        height={60}
        style={{
          borderRadius: RADIUS.small,
        }}
      />
      <View style={styles.productInfo}>
        <View style={styles.wrapperDate}>
          <Skeleton
            animation="wave"
            width={150}
            style={{
              borderRadius: RADIUS.small,
            }}
          />
          <Skeleton
            animation="wave"
            width={50}
            style={{
              borderRadius: RADIUS.small,
            }}
          />
        </View>
        <Skeleton
          animation="wave"
          width={100}
          style={{
            marginTop: 10,
            borderRadius: RADIUS.small,
          }}
        />
        <View style={styles.wrapper}>
          <Skeleton
            animation="wave"
            width={70}
            style={{
              marginTop: 10,
              borderRadius: RADIUS.small,
            }}
          />
          <Skeleton
            animation="wave"
            width={20}
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

const Diminati = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {orderSeller, isLoading} = useSelector(
    state => state.orderSellerReducers,
  );
  const isFocused = useIsFocused();

  console.log('Oreder Seller', orderSeller);

  useEffect(() => {
    dispatch(getOrderSeller());
  }, [dispatch, isFocused]);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 5,
      }}>
      {orderSeller.map(item =>
        isLoading ? (
          <LoadingCard />
        ) : (
          <CardDiminati
            key={'diminati' + item.id}
            product_name={item.Product?.name}
            date={item.transaction_date}
            base_price={item.base_price}
            bid_price={item.price}
            status={item.status}
            image_url={item.Product?.image_url}
            onPress={() =>
              navigation.navigate('InfoPenawaranScreen', {id_order: item.id})
            }
          />
        ),
      )}
    </View>
  );
};

export default Diminati;
