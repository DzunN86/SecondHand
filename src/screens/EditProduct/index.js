import {Formik} from 'formik';
import React, {createRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {
  BottomUpload,
  CustomButton,
  CustomHeader,
  CustomInput,
  MultipleSelect,
  Upload,
} from '../../components';
import {formProductSchema, showError} from '../../plugins';
import {upDataProduct} from '../../store/actions/seller';
import {SIZES} from '../../themes';
import styles from './styles';

const thisRef = createRef();
const anim = new Animated.Value(1);

export default function EditProduct({navigation, route}) {
  const dispatch = useDispatch();
  const {category} = useSelector(state => state.categoryReducer);
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {isLoading} = useSelector(state => state.commonReducers);
  const {detailProduk} = useSelector(state => state.detailSellerReducer);
  const {id} = route.params;
  const [image, setAvatar] = useState(detailProduk.image_url);

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
      dispatch(upDataProduct(id, formData, navigation));
    } catch (error) {
      showError('Update Produk Gagal');
    }
  };

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
        deskripsi="Choose your image product"
      />
      <Animated.View
        style={{opacity: Animated.add(0.1, Animated.multiply(anim, 1.0))}}>
        <Formik
          initialValues={{
            name_product: detailProduk.name,
            base_price: detailProduk.base_price.toString(),
            category_ids: detailProduk.Categories?.map(item => item.id),
            description: detailProduk.description,
            image: detailProduk.image_url,
            location: detailProduk.location,
          }}
          validationSchema={formProductSchema}
          onSubmit={values => onPressUpdate(values)}>
          {({
            handleChange,
            setFieldValue,
            handleSubmit,
            values,
            errors,
            touched,
            dirty,
            isValid,
          }) => (
            <>
              <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    marginVertical: 10,
                    marginHorizontal: 16,
                    minHeight: SIZES.height * 0.95,
                  }}>
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
                    style={{marginTop: 10}}
                    source={image}
                    onPress={() => thisRef.current.snapTo(0)}
                    name="camera"
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <CustomButton
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
