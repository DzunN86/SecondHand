import {Text, View} from 'react-native';
import React from 'react';
import {formatRupiah} from '../../../utils';
import styles from './styles';
import {COLORS} from '../../../themes';

export default function CardProduk({
  nameProduk,
  kategori,
  price,
  bid_price,
  status,
}) {
  const getBgColor = () => {
    if (status == 'pending') {
      return COLORS.accent;
    }
    if (status == 'accepted') {
      return COLORS.success;
    }
    if (status == 'declined') {
      return COLORS.danger;
    }
  };
  return (
    <View style={styles.produk}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.namaProduk}>{nameProduk}</Text>
        {status && (
          <View style={[styles.badgeStatus, {backgroundColor: getBgColor()}]}>
            <Text style={styles.labelStatus}>{status}</Text>
          </View>
        )}
      </View>
      <Text style={styles.kategori}>
        {kategori?.length > 0
          ? kategori.map(item => item.name).join(', ')
          : '-'}
      </Text>
      <Text style={[styles.price, bid_price ? styles.strike_through : null]}>
        {formatRupiah(price)}
      </Text>
      {bid_price && (
        <Text style={styles.bidPrice}>Ditawar {formatRupiah(bid_price)}</Text>
      )}
    </View>
  );
}
