import {Skeleton} from '@rneui/base';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {COLORS, RADIUS} from '../../../themes';
import styles from './styles';

const CardWishlist = ({
  product_name,
  image,
  location,
  base_price,
  onDelete,
  onPress,
}) => {
  const {isLoading} = useSelector(state => state.wishlistReducer);

  if (isLoading) {
    return (
      <View style={styles.cardSkeleton}>
        <Skeleton
          animation="pulse"
          style={styles.imageProduct}
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
      <Image style={styles.imageProduct} source={image}></Image>
      <Text style={styles.label} numberOfLines={1}>{product_name}</Text>
      <Text style={styles.description}>{location}</Text>
      <View style={styles.descProduct}>
        <Text style={styles.label}>{base_price}</Text>
        <RectButton onPress={onDelete}>
          <Icon style={styles.icon} name="trash" size={22} color="black" />
        </RectButton>
      </View>
    </RectButton>
  );
};

export default CardWishlist;
