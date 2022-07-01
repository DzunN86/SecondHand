import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {priceFormater} from '../../../utils';

const CardProduct = ({onPress, name, category, price, image}) => {
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardProduct}>
        <Image source={{uri: image}} style={styles.imageProduk} />
        <Text style={styles.textCardProduct} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.typeProduct} numberOfLines={1}>
          {category.map(item => item.name).join(', ')}
        </Text>
        <Text style={styles.textCardProduct} numberOfLines={1}>
          {priceFormater(price)}
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
