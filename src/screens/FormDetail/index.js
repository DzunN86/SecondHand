import {View, ScrollView} from 'react-native';
import React, {createRef, useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import Animated from 'react-native-reanimated';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import {
  CustomInput,
  CustomButton,
  MultipleSelect,
  CustomHeader,
  BottomUpload, 
  Upload
} from '../../components';
import {formProductSchema} from '../../plugins';
import {doProduct, getKategori} from '../../store/actions';
import { SIZES } from '../../themes';

const thisRef = createRef();
const anim = new Animated.Value(1);

export default function FormDetail({navigation, route}) {
  const dispatch = useDispatch();

  let data = {};

  if (route.params) {
    data = route.params;
  }

  const {category} = useSelector(state => state.categoryReducer);
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {isLoading} = useSelector(state => state.commonReducers);
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(getKategori());
  }, [dispatch, isFocused]);

  // const testPayload = value => {
  //   dispatch(getDetailSeller(produk_id));
  // }

  const onPressTerbit = value => {
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
      dispatch(doProduct(formData, navigation));
    } catch (error) {
      console.log(error);
    }
  };

  const formRef = useRef()
  var a = formRef.current?.values.image
  const [image, setAvatar] = useState(a);

  const initialValues = {
    name_product: '',
    base_price: '',
    category_ids: [],
    description: '',
    image: '-',
    location: '',
  }

  console.log(image)
  console.log(formRef.current?.values.image)
  console.log(typeof formRef.current?.values.image)

  return (
    <>
      <CustomHeader
        type="BackTitle"
        title="Lengkapi Detail Produk"
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
          initialValues={initialValues}
          innerRef={formRef}
          validationSchema={formProductSchema}
          onSubmit={values => onPressTerbit(values)}>
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
              <ScrollView contentContainerStyle={styles.scroll}>
                <View style={{marginVertical: 10, marginHorizontal: 16, minHeight: SIZES.height * 0.95}}>
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
                    source={values.image}
                    onPress={() => thisRef.current.snapTo(0)}
                    name="camera"
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <CustomButton
                    style={{width: '48%'}}
                    primary
                    type="daftarjual"
                    title="Preview"
                    onPress={() =>
                      navigation.navigate('PreviewScreen', {values, image})
                    }
                    disabled={!(dirty && isValid)}
                  />
                  <CustomButton
                    style={{width: '48%'}}
                    primary
                    type="daftarjual"
                    title="Terbitkan"
                    disabled={!(dirty && isValid) || isLoading}
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
}
