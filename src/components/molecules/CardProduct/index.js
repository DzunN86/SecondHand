import {Skeleton} from '@rneui/base';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RADIUS} from '../../../themes';
import {formatRupiah} from '../../../utils';
import styles from './styles';

const CardProduct = ({onPress, name, category, price, image}) => {
  const {isLoading} = useSelector(state => state.homeReducer);
  const Loading = useSelector(state => state.productSellerReducers.isLoading);

  if (isLoading || Loading) {
    return (
      <View style={styles.cardProduct}>
        <Skeleton animation="wave" style={styles.imageProduk} />
        <Skeleton
          animation="wave"
          width={60}
          style={{
            marginTop: 15,
            borderRadius: RADIUS.small,
          }}
        />
        <Skeleton
          animation="wave"
          width={100}
          style={{
            marginTop: 10,
            borderRadius: RADIUS.small,
          }}
        />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardProduct}>
        <Image source={{uri: image}} style={styles.imageProduk} />
        <Text style={styles.textCardProduct} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.typeProduct} numberOfLines={1}>
          {category.length > 0
            ? category.map(item => item.name).join(', ')
            : '-'}
        </Text>
        <Text style={styles.textCardProduct} numberOfLines={1}>
          {formatRupiah(price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

CardProduct.PropTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  category: PropTypes.array,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default memo(CardProduct);
