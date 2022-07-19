import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardWishlist, CustomHeader} from '../../components';
import {deleteItemWishlist, getItemWishlist} from '../../store/actions/wishlist';
import styles from './styles';

const Wishlist = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataWishlist} = useSelector(state => state.wishlistReducer);

  useEffect(() => {
    dispatch(getItemWishlist());
  }, []);

  const onDelete = id => {
    dispatch(deleteItemWishlist(id));
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomHeader
          type="BackTitle"
          title="Wishlist Barang"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.productWrapper}>
          {dataWishlist.map((item, index) => (
            <CardWishlist
              key={index}
              onPress={() => navigation.navigate('DetailProductScreen', {id_product: item?.product_id})}
              image={{uri: item?.Product?.image_url}}
              product_name={item?.Product?.name}
              base_price={item?.Product?.base_price}
              location={item?.Product?.location}
              onDelete={() => onDelete(item?.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Wishlist;
