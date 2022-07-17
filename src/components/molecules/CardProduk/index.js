import { Text, View } from 'react-native';
import React from 'react';
import { formatRupiah } from '../../../utils';
import styles from './styles';

export default function CardProduk({nameProduk, kategori, price}) {
  return (
    <View style={styles.produk}>
      <View style={styles.wrapperProduk}>
        <View>
          <Text style={styles.namaProduk}>{nameProduk}</Text>
          <Text style={styles.kategori}>
            {kategori?.length > 0
              ? kategori.map(item => item.name).join(', ')
              : '-'}
          </Text>
          <Text style={styles.price}>{formatRupiah(price)}</Text>
        </View>
      </View>
    </View>
  );
};
