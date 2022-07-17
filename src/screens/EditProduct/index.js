import {View, ScrollView} from 'react-native';
import React, {createRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Animated from 'react-native-reanimated';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import { SIZES } from '../../themes';
import {
  CustomInput,
  CustomButton,
  MultipleSelect,
  CustomHeader,
  BottomUpload,
  Upload,
} from '../../components';
import {formProductSchema} from '../../plugins';
import { upDataProduct } from '../../store/actions/seller';

const thisRef = createRef();
const anim = new Animated.Value(1);

export default function EditProduct({navigation, route}) {
  const dispatch = useDispatch();

  let data = {};

  if (route.params) {
    data = route.params;
  }

  const {category} = useSelector(state => state.categoryReducer);
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {isLoading} = useSelector(state => state.commonReducers);
  const {detailProduk} = useSelector(state => state.detailSellerReducer);
  const isFocused = useIsFocused();
  const {id} = route.params;
  
  const onPressUpdate = value => {
    try {
      const formData = new FormData();

      formData.append('name', value.name_product);
      formData.append('description', value.description);
      formData.append('base_price', value.base_price);
      formData.append('category_ids', value.category_ids.toString());
      formData.append('location', userProfile.city);
      formData.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
      console.log(formData)
      dispatch(upDataProduct(id, formData, navigation));
    } catch (error) {
      console.log(error);
    }
  };
  const [image, setAvatar] = useState(detailProduk.image_url);
  console.log(id)

  return (
    <>
      <CustomHeader
        type="BackTitle"
        title="Edit Produk"
        onPress={() => navigation.goBack()}
      />
      <BottomUpload
        image={image}
        setAvatar={setAvatar}
        thisRef={thisRef}
        anim={anim}
      />
      <Animated.View
        style={{opacity: Animated.add(0.1, Animated.multiply(anim, 1.0))}}>
        <Formik
          initialValues={{
            name_product: detailProduk.name,
            base_price: detailProduk.base_price.toString(),
            category_ids: detailProduk.Categories?.map((item) => item.id),
            description: detailProduk.description,
            image: detailProduk.image_url,
            location: detailProduk.location,
          }}
          validationSchema={formProductSchema}
          onSubmit={values => onPressUpdate(values)}>
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
            isValid,
            dirty,
          }) => (
            <>
              <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={{marginVertical: 10, marginHorizontal: 16, minHeight: SIZES.height * 0.9}}>
                  <CustomInput
                    label="Nama Produk"
                    placeholder="Nama Produk"
                    name="name_product"
                    onChangeText={handleChange('name_product')}
                    value={values.name_product}
                    error={touched.name_product && errors.name_product}
                  />
                  <CustomInput
                    label="Harga Produk"
                    placeholder="Rp 0,00"
                    name="base_price"
                    keyboardType="numeric"
                    onChangeText={handleChange('base_price')}
                    value={values.base_price}
                    error={touched.base_price && errors.base_price}
                  />
                  <MultipleSelect
                    label="Kategori"
                    placeholder="Kategori"
                    name="category_ids"
                    mode="BADGE"
                    multiple
                    schema={{
                      label: 'name',
                      value: 'id',
                    }}
                    data={category}
                    setFieldValue={setFieldValue}
                    initialData={values.category_ids}
                    value={values.category_ids}
                    error={touched.category_ids && errors.category_ids}
                  />
                  <CustomInput
                    label="Deskripsi"
                    placeholder="Contoh: Jalan Ikan Kerapu 21"
                    name="description"
                    onChangeText={handleChange('description')}
                    value={values.description}
                    error={touched.description && errors.description}
                  />
                  <Upload
                    source={image}
                    onPress={() => thisRef.current.snapTo(0)}
                    name="camera"
                  />
                  <CustomButton
                    style={styles.button}
                    loading={isLoading}
                    primary
                    title="Simpan"
                    onPress={handleSubmit}
                    disabled={!(dirty && isValid) || isLoading}
                  />
                </View>
              </ScrollView>
            </>
          )}
        </Formik>
      </Animated.View>
    </>
  );
}
