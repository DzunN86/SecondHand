import { Text, View,} from 'react-native';
import React from 'react';
import styles from './styles';
import { COLORS, FONTS } from '../../../themes';

const ProductSeller = ({ nameProduk, kategori, price }) => {
  return (
    <View style={styles.produk}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ color: COLORS.black, textTransform: 'capitalize', ...FONTS.body4 }}>
            {nameProduk}
          </Text>
          <Text style={{ color: COLORS.lightGray3, ...FONTS.body4 }}>
            {kategori}
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body4 }} numberOfLines={1}>
            {price}
          </Text>
        </View>
      </View>
    </View >
  );
};
export default ProductSeller;