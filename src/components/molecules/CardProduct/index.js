import {Skeleton} from '@rneui/base';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {COLORS, RADIUS} from '../../../themes';
import {formatRupiah} from '../../../utils';
import styles from './styles';

const CardProduct = ({onPress, name, category, price, image}) => {
  const {isLoading} = useSelector(state => state.homeReducer);
  const Loading = useSelector(state => state.productSellerReducers.isLoading);

  if (isLoading || Loading) {
    return (
      <View style={styles.cardSkeleton}>
        <Skeleton
          animation="pulse"
          style={styles.imageProduk}
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
        />
        <Skeleton
          animation="pulse"
          width={60}
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
          style={{
            marginTop: 15,
            borderRadius: RADIUS.small,
          }}
        />
        <Skeleton
          animation="pulse"
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
          width={100}
          style={{
            marginTop: 10,
            borderRadius: RADIUS.small,
          }}
        />
        <Skeleton
          animation="pulse"
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
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
    <RectButton style={styles.cardProduct} onPress={onPress}>
      <Image
        source={{
          uri:
            image ||
            `https://ui-avatars.com/api/?name=Product&background=01A0C7&color=fff`,
        }}
        style={styles.imageProduk}
      />
      <Text style={styles.textCardProduct} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.typeProduct} numberOfLines={1}>
        {category.length > 0 ? category.map(item => item.name).join(', ') : '-'}
      </Text>
      <Text style={styles.textCardProduct} numberOfLines={1}>
        {formatRupiah(price)}
      </Text>
    </RectButton>
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
