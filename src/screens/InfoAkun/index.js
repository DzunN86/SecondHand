import {View, ScrollView} from 'react-native';
import React, {createRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import {Formik} from 'formik';
import styles from './styles';
import {updateSchema} from '../../plugins';
import {
  CustomHeader,
  CustomButton,
  CustomSelect,
  CustomInput,
  Upload,
  BottomUpload,
} from '../../components';
import {kota} from '../../utils';
import {doUpdate} from '../../store/actions/akun';
import { SIZES } from '../../themes';

const thisRef = createRef();
const anim = new Animated.Value(1);

export default function InfoAkun({navigation}) {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.commonReducers);
  const {userProfile} = useSelector(state => state.getUserReducer);

  const onPressUpdate = data => {
    const formData = new FormData();

    formData.append('full_name', data.nama);
    formData.append('city', data.kota);
    formData.append('address', data.alamat);
    formData.append('phone_number', data.phone_number);
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    dispatch(doUpdate(formData, navigation));
  };

  const [image, setAvatar] = useState(userProfile.image_url);

  return (
    <>
      <CustomHeader
        type="BackTitle"
        title="Lengkapi Info Akun"
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
            image: userProfile.image_url,
            nama: userProfile.full_name,
            phone_number: userProfile.phone_number,
            alamat: userProfile.address,
            kota: userProfile.city,
          }}
          validationSchema={updateSchema}
          onSubmit={values => onPressUpdate(values)}>
          {({handleChange, handleSubmit, values, errors, isValid, dirty}) => (
            <>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
              <View style={{marginVertical: 10, marginHorizontal: 16, minHeight: SIZES.height * 0.95}}>
              <Upload
                source={image}
                style={{
                  alignSelf: 'center',
                }}
                onPress={() => thisRef.current.snapTo(0)}
                name="camera"
              />
              <CustomInput
                testID="input-nama"
                label="Nama"
                name="nama"
                onChangeText={handleChange('nama')}
                value={values.nama}
                error={errors.nama}
                iconPosition="right"
                placeholder="Nama Lengkap"
              />
              <CustomInput
                testID="input-phone_number"
                label="Nomor Telepon"
                name="phone_number"
                onChangeText={handleChange('phone_number')}
                value={values.phone_number}
                error={errors.phone_number}
                iconPosition="right"
                placeholder="+62 xx xxx xxx xxx"
              />
              <CustomInput
                testID="input-alamat"
                label="Alamat"
                name="alamat"
                onChangeText={handleChange('alamat')}
                value={values.alamat}
                error={errors.alamat}
                iconPosition="right"
                placeholder="Alamat Lengkap"
              />
              <CustomSelect
                label="Kota"
                name="kota"
                onSelectChange={handleChange('kota')}
                value={values.kota}
                error={errors.kota}
                iconPosition="left"
                selectData={kota}
              />
              </View>
              <View style={styles.buttonWrapper}>
                <CustomButton
                  testID="btn-login"
                  loading={isLoading}
                  disabled={isLoading}
                  primary
                  title="Simpan"
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
}
