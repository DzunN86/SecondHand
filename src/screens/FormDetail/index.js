import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BackTitle from '../../components/atoms/CustomHeader/BackTitle';
import { CustomInput, CustomButton, MultipleSelect } from '../../components/atoms/';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { formDetailSchema } from '../../plugins';
import { doProduct } from '../../store/actions/seller/addProduct';
import TabAdd from '../../components/atoms/TabAdd';
import { getKategori } from '../../store/actions/kategori';


export default function FormDetail({ navigation }) {
  const dispatch = useDispatch();
  const { category } = useSelector(state => state.categoryReducer)
  const { userData } = useSelector(state => state.loginReducer);

  useEffect(() => {
    dispatch(getKategori());
  }, [])

  const onPressTerbit = (data) => {
    const formData = new FormData();

    formData.append('name_product', data.name_product);
    formData.append('description', data.description);
    formData.append('base_price', data.base_price);
    formData.append('category_ids', data.category_ids.toString());
    formData.append('image', {
      uri: `https://ui-avatars.com/api/?name=${data.nama}`,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    dispatch(doProduct(userData, formData));
  };
  return (
    <>
      <BackTitle title='Lengkapi Detail Produk' onPress={() => navigation.navigate('Daftar Jual')} />
      <Formik
        initialValues={{
          name_product: '',
          base_price: '',
          category_ids: [],
          description: '',
        }}
        validationSchema={formDetailSchema}
        onSubmit={values => onPressTerbit(values)}>
        {({ handleChange, handleSubmit, setFieldValue, values, errors, isValid, dirty }) => (
          <>
            <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
              <CustomInput
                label="Nama Produk"
                placeholder="Nama Produk"
                name='name_product'
                onChangeText={handleChange('name_product')}
                value={values.name_product}
                error={errors.name_product}
              />
              <CustomInput
                label="Harga Produk"
                placeholder='Rp 0,00'
                name='base_price'
                onChangeText={handleChange('base_price')}
                value={values.base_price}
                error={errors.base_price}
              />
              <MultipleSelect
                label='Kategori'
                placeholder='Kategori'
                name='category_ids'
                mode='BADGE'
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
                placeholder='Contoh: Jalan Ikan Kerapu 21'
                name='description'
                onChangeText={handleChange('description')}
                value={values.description}
                error={errors.description}
              />
              <TabAdd
                type='TabPicture'
                label='Foto Produk'
                icon='plus'
              />
            </View>
            <View style={{ marginVertical: 90, marginHorizontal: 25, flexDirection: 'column' }}>
              <CustomButton
                primary
                title='Preview'
                style={styles.button1}
                onPress={() => navigation.navigate('PreviewScreen', {values})}
                disable={!(dirty && isValid)}
              />
              <CustomButton
                primary
                title='Terbitkan'
                style={styles.button2}
                // onPress={() => navigation.navigate('Daftar Jual')}
                disable={!(dirty && isValid)}
                onPress={() => onPressTerbit(values)}
              />
            </View>
          </>
        )}
      </Formik>
    </>
  );
}
