import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {
  CustomButton,
  CustomHeader,
  CustomInput,
  CustomSelect,
} from '../../../components';
import {doRegister} from '../../../store/actions/auth/regisUser';
import {useDispatch, useSelector} from 'react-redux';
import {registerSchema} from '../../../plugins';
import {Formik} from 'formik';
import {COLORS} from '../../../themes';
import Icon from 'react-native-vector-icons/Feather';
import {kota} from '../../../utils';

export default function Register({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.commonReducers);

  const onPressLogin = data => {
    const formData = new FormData();

    formData.append('full_name', data.nama);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('city', data.kota);
    formData.append('address', data.alamat);
    formData.append('phone_number', data.phone_number);
    formData.append('image', {
      uri: `https://ui-avatars.com/api/?name=${data.nama}`,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    dispatch(doRegister(formData, navigation));
  };
  return (
    <ScrollView contentContainerStyle={styles.scroll} testID="LoginScreen">
      <View style={styles.container}>
        <CustomHeader
          type="BackTitle"
          onPress={() => navigation.navigate('LoginScreen')}
        />
        <View style={styles.daftar}>
          <Text style={styles.label}>Daftar</Text>
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={{
              nama: '',
              email: '',
              password: '',
              phone_number: '',
              alamat: '',
              kota: '',
            }}
            validationSchema={registerSchema}
            onSubmit={values => onPressLogin(values)}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              dirty,
            }) => (
              <>
                <CustomInput
                  testID="input-nama"
                  label="Nama"
                  name="nama"
                  onChangeText={handleChange('nama')}
                  value={values.nama}
                  error={touched.nama && errors.nama}
                  iconPosition="right"
                  placeholder="Nama Lengkap"
                />
                <CustomInput
                  testID="input-email"
                  label="Email"
                  name="email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  error={touched.email && errors.email}
                  iconPosition="right"
                  placeholder="Contoh: johndee@gmail.com"
                />
                <CustomInput
                  testID="input-password"
                  label="Buat password"
                  name="password"
                  iconPosition="right"
                  secureTextEntry={isSecureEntry}
                  placeholder="Buat password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                  icon={
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry(prev => !prev);
                      }}>
                      <Icon
                        name={isSecureEntry ? 'eye-off' : 'eye'}
                        size={24}
                        color={COLORS.grey1}
                      />
                    </TouchableOpacity>
                  }
                />
                <CustomInput
                  testID="input-phone_number"
                  label="Nomor Telepon"
                  name="phone_number"
                  onChangeText={handleChange('phone_number')}
                  value={values.phone_number}
                  error={touched.phone_number && errors.phone_number}
                  iconPosition="right"
                  placeholder="+62 xx xxx xxx xxx"
                />
                <CustomInput
                  testID="input-alamat"
                  label="Alamat"
                  name="alamat"
                  onChangeText={handleChange('alamat')}
                  value={values.alamat}
                  error={touched.alamat && errors.alamat}
                  iconPosition="right"
                  placeholder="Alamat Lengkap"
                />
                <CustomSelect
                  label="Kota"
                  name="kota"
                  onSelectChange={handleChange('kota')}
                  value={values.kota}
                  error={touched.kota && errors.kota}
                  iconPosition="left"
                  selectData={kota}
                />
                <CustomButton
                  testID="btn-login"
                  loading={isLoading}
                  primary
                  title="Daftar"
                  disabled={!(dirty && isValid) || isLoading}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.masuk}>
          <Text style={styles.text}>Sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.textButton}> Masuk di sini</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
