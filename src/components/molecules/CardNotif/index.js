import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {formatDateTime, formatRupiah} from '../../../utils';
import styles from './style';

const CardNotif = ({
  image_url,
  status,
  product_name,
  base_price,
  bid_price,
  date,
  isRead,
  onPress,
}) => {
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
      case 'tolak':
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
};

export default memo(CardNotif);
