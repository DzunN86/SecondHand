import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {CardFoto, CustomButton} from '../../components';
import BackHeader from '../../components/atoms/CustomHeader/BackHeader';
import CardDeskripsi from '../../components/molecules/CardDeskripsi';

import {doProduct} from '../../store/actions';
import {SIZES} from '../../themes';
import {formatRupiah} from '../../utils';
import styles from './styles';

const anim = new Animated.Value(1);
const Preview = ({navigation, route}) => {
  const {values, image} = route.params;
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {category} = useSelector(state => state.categoryReducer);
  const dispatch = useDispatch();

  // Ambil Label Kategori by Id Kategori :)
  var arrCategory = values.category_ids;
  var arrCategoryName = [];
  for (var i = 0; i < arrCategory.length; i++) {
    for (var j = 0; j < category.length; j++) {
      if (arrCategory[i] == category[j].id) {
        arrCategoryName.push(category[j].name);
      }
    }
  }

  const onPressTerbit = () => {
    const formData = new FormData();

    formData.append('name', values.name_product);
    formData.append('description', values.description);
    formData.append('base_price', values.base_price);
    formData.append('category_ids', values.category_ids.toString());
    formData.append('location', userProfile.city);
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    dispatch(doProduct(formData, navigation));
  };
  return (
    <View>
      <ScrollView>
        <Animated.View
          style={{opacity: Animated.add(0.1, Animated.multiply(anim, 1.0))}}>
          <ImageBackground source={{uri: image}} style={styles.bgProduk}>
            <BackHeader onPress={() => navigation.goBack()} />
            <View style={styles.containerKeterangan}>
              <View style={styles.produk}>
                <View style={styles.wrapperProduk}>
                  <View>
                    <Text style={styles.namaProduk}>{values.name_product}</Text>
                    <Text style={styles.kategori}>
                      {arrCategoryName?.length > 0
                        ? arrCategoryName.map(item => item).join(', ')
                        : '-'}
                    </Text>
                    <Text style={styles.price}>
                      {formatRupiah(values.base_price)}
                    </Text>
                  </View>
                </View>
              </View>
              <CardFoto
                text1={userProfile.full_name}
                text2={userProfile.city}
                source={{uri: userProfile.image_url}}
              />
              <CardDeskripsi
                title="Deskripsi"
                deskripsi={values.description}
              />
            </View>
          </ImageBackground>
        </Animated.View>
        <View style={{height: SIZES.height * 0.7}}></View>
        <View style={styles.button}>
          <CustomButton
            primary
            type="daftarjual"
            title="Terbitkan"
            onPress={onPressTerbit}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Preview;
