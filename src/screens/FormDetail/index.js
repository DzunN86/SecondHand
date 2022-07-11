import { View, ScrollView } from 'react-native';
import React, { createRef, useState } from 'react';
import BackTitle from '../../components/atoms/CustomHeader/BackTitle';
import {
  CustomInput,
  CustomButton,
  MultipleSelect,
} from '../../components/atoms/';
import styles from './styles';
import { BottomUpload, Upload } from '../../components/molecules';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { formDetailSchema } from '../../plugins';
import { doProduct } from '../../store/actions/seller/addProduct';
import { getKategori } from '../../store/actions/kategori';
import Animated from 'react-native-reanimated';

const thisRef = createRef();
const anim = new Animated.Value(1);

export default function FormDetail({ navigation, route }) {
  const dispatch = useDispatch();

  let data = {}

  if (route.params) {
    data = route.params;
  }

  const { category } = useSelector(state => state.categoryReducer);
  const { userData } = useSelector(state => state.loginReducer);
  const { userProfile } = useSelector(state => state.getUserReducer);

  useEffect(() => {
    dispatch(getKategori());
  }, [dispatch]);


  // const testPayload = value => {
  //   dispatch(getDetailSeller(produk_id));
  // }

  const onPressTerbit = value => {
    const formData = new FormData();

    formData.append('name', value.name_product);
    formData.append('description', value.description);
    formData.append('base_price', value.base_price);
    formData.append('category_ids', value.category_ids.toString());
    formData.append('location', userProfile.city);
    formData.append('image', {
      uri: `https://ui-avatars.com/api/?name=${data.nama}`,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    dispatch(doProduct(formData));
  };
  const [image, setAvatar] = useState(userData.image_url);
  return (
    <>
      <BackTitle
        title="Lengkapi Detail Produk"
        onPress={() => navigation.goBack()}
      />
      <BottomUpload
        image={image}
        setAvatar={setAvatar}
        thisRef={thisRef}
        anim={anim}
      />
      <Animated.View
        style={{ opacity: Animated.add(0.1, Animated.multiply(anim, 1.0)) }}>
        <Formik
          initialValues={{
            name_product: '',
            base_price: '',
            category_ids: [],
            description: '',
            image: '',
            location: '',
          }}
          validationSchema={formDetailSchema}
          onSubmit={values => onPressTerbit(values)}>
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            isValid,
            dirty,
          }) => (
            <>
              <ScrollView contentContainerStyle={styles.scroll} >
                <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                  <CustomInput
                    label="Nama Produk"
                    placeholder="Nama Produk"
                    name="name_product"
                    onChangeText={handleChange('name_product')}
                    value={values.name_product}
                    error={errors.name_product}
                  />
                  <CustomInput
                    label="Harga Produk"
                    placeholder="Rp 0,00"
                    name="base_price"
                    onChangeText={handleChange('base_price')}
                    value={values.base_price}
                    error={errors.base_price}
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
                    error={errors.category_ids}
                  />
                  <CustomInput
                    label="Deskripsi"
                    placeholder="Contoh: Jalan Ikan Kerapu 21"
                    name="description"
                    onChangeText={handleChange('description')}
                    value={values.description}
                    error={errors.description}
                  />
                  <Upload
                    source={{ uri: image }} onPress={() => thisRef.current.snapTo(0)} name="plus"
                  />
                </View>
                <View
                  style={{
                    marginVertical: 90,
                    marginHorizontal: 25,
                    flexDirection: 'column',
                  }}>
                  <CustomButton
                    primary
                    title="Preview"
                    style={styles.button1}
                    onPress={() => navigation.navigate('PreviewScreen', { values })}
                    disable={!(dirty && isValid)}
                  />
                  <CustomButton
                    primary
                    title="Terbitkan"
                    style={styles.button2}
                    disable={!(dirty && isValid)}
                    onPress={handleSubmit}
                  />
                </View>
              </ScrollView>
            </>
          )}
        </Formik>
      </Animated.View>

    </>
  );
};
