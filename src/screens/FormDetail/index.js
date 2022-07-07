import { View } from 'react-native';
import React, { createRef, useState } from 'react';
import BackTitle from '../../components/atoms/CustomHeader/BackTitle';
import {
  CustomInput,
  CustomButton,
  MultipleSelect,
} from '../../components/atoms/';
import styles from './styles';
import { BottomUpload } from '../../components/molecules';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { formDetailSchema } from '../../plugins';
import { doProduct } from '../../store/actions/seller/addProduct';
import { upDataProduct } from '../../store/actions';
import { getKategori } from '../../store/actions/kategori';
import TabAdd from '../../components/atoms/TabAdd';
import Animated from 'react-native-reanimated';

const thisRef = createRef();
const anim = new Animated.Value(1);

export default function FormDetail({ navigation, route }) {
  const dispatch = useDispatch();
  const { data } = route.params;

  const { category } = useSelector(state => state.categoryReducer);
  const { userData } = useSelector(state => state.loginReducer);
  const { userProfile } = useSelector(state => state.getUserReducer);
  const { productSeller } = useSelector(state => state.productSellerReducers)

  useEffect(() => {
    dispatch(getKategori());
  }, [dispatch]);

  const onPressTerbit = value => {
    const formData = new FormData();
    const update = update

    formData.append('name', value.name_product);
    formData.append('description', value.description);
    formData.append('base_price', value.base_price);
    formData.append('category_ids', value.category_ids.toString());
    formData.append('location', userProfile.city);
    if (data !== false) {
      if (value.image != data.image_url) {
        formData.append('image', {
          uri: value.image.uri, //`https://ui-avatars.com/api/?name=${value.nama}`//
          type: 'image/jpeg',
          name: data.image.fileName,
        });
      }
      dispatch(upDataProduct(access_token, data.id, formData));
    }else {
      formData.append('image', {
        uri: value.image.uri, //`https://ui-avatars.com/api/?name=${value.nama}`//
        type: 'image/jpeg',
        name: data.image.fileName,
      });
      dispatch(doProduct(formData));
    }
  }
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
            name_product: data.name_product ? data.name_product : '',
            base_price: data.base_price ? data.base_price : '',
            category_ids:data.category_ids ? data.category_ids.map((item) => item.id): [],
            description: data.description ? data.description: '',
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
                <TabAdd
                  type="TabPicture"
                  label="Foto Produk"
                  icon="plus"
                  onPress={() => thisRef.current.snapTo(0)}
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
                  // onPress={() => navigation.navigate('Daftar Jual')}
                  disable={!(dirty && isValid)}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </Animated.View>
    </>
  );
};
