import React from 'react';
import {ImageBackground, ScrollView, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardFoto, CardDeskripsi, CustomButton, CustomHeader} from '../../components';
import {doProduct} from '../../store/actions';
import {SIZES} from '../../themes';
import {formatRupiah} from '../../utils';
import styles from './styles';

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{minHeight: SIZES.height - 5}}>
        <ImageBackground
          source={{uri: image}}
          style={styles.bgProduk}>
          <CustomHeader
            type="BackHeader"
            onPress={() => navigation.goBack()}
          />
        </ImageBackground>
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
          <View style={styles.buttonWrapper}>
            <CustomButton
              primary
              type="daftarjual"
              title="Terbitkan"
              onPress={onPressTerbit}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Preview;
