import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Skeleton} from '@rneui/base';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  LogBox,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder} from '../../assets';
import {EmptyState} from '../../components';
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
    if (status == 'accepted' || status == 'seller') {
      return COLORS.success;
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
                <Text style={styles.labelStatus}>{status == 'seller' ? 'Terjual' : ''}</Text>
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

const Terjual = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {productTerjual, isLoading} = useSelector(
    state => state.orderSellerReducers,
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(getOrderSeller());
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [dispatch, isFocused]);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 5,
      }}>
      <FlatList
        data={productTerjual}
        keyExtractor={item => item?.id}
        renderItem={({item}) =>
          isLoading ? (
            <LoadingCard />
          ) : (
            <CardDiminati
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
          )
        }
        ListEmptyComponent={() => (
          <EmptyState
            image={EmptyOrder}
            title="Belum ada produk yang terjual"
            subTitle="Sabar ya rejeki nggak kemana kok"
          />
        )}
      />
    </View>
  );
};

export default Terjual;
