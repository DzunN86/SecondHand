import {useNavigation} from '@react-navigation/native';
import {Skeleton} from '@rneui/base';
import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomHeader} from '../../components';
import {getHistoryData} from '../../store/actions/history';
import {COLORS, RADIUS} from '../../themes';
import {formatDateTime, formatRupiah, sortDate} from '../../utils';
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
                  {formatRupiah(bid_price)}
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

const History = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {history, isLoading} = useSelector(state => state.historyReducers);
  useEffect(() => {
    dispatch(getHistoryData());
  }, []);
  return (
    <ScrollView>
      <CustomHeader
        type="BackTitle"
        title="History Transaksi"
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          marginTop: 5,
        }}>
        {history.sort(sortDate).map(item =>
          isLoading ? (
            <LoadingCard />
          ) : (
            <CardBuyerOrder
              product_name={item.product_name}
              date={item.transaction_date}
              bid_price={item.price}
              status={item.status}
              image_url={item.image_url}
            />
          ),
        )}
      </View>
    </ScrollView>
  );
};

export default History;
