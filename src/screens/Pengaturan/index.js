import { View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import styles from './styles';
import {changePasswordSchema} from '../../plugins';
import { CustomHeader, CustomInput, CustomButton } from '../../components';

export default function Settings({navigation}) {
  return (
    <View>
      <CustomHeader
        type="BackTitle"
        title="Pengaturan Akun"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.form}>
          <Formik
            initialValues={{
              current_password: "",
              new_password: "",
              confirm_password: "",
            }}
            validationSchema={changePasswordSchema}
            onSubmit={values => onPressUpdate(values)}>
            {({handleChange, handleSubmit, values, errors, isValid, dirty}) => (
              <>
                <CustomInput
                  testID="input-current_password"
                  label="Current Password"
                  name="current_password"
                  onChangeText={handleChange('current_password')}
                  value={values.current_password}
                  error={errors.current_password}
                  iconPosition="right"
                  placeholder="Masukkan password saat ini"
                />
                <CustomInput
                  testID="input-new_password"
                  label="New Password"
                  name="new_password"
                  onChangeText={handleChange('new_password')}
                  value={values.new_password}
                  error={errors.new_password}
                  iconPosition="right"
                  placeholder="Masukkan password baru"
                />
                <CustomInput
                  testID="input-confirm_password"
                  label="Confirm Password"
                  name="confirm_password"
                  onChangeText={handleChange('confirm_password')}
                  value={values.confirm_password}
                  error={errors.confirm_password}
                  iconPosition="right"
                  placeholder="Masukkan lagi password baru"
                />
                <CustomButton
                  testID="btn-login"
                  primary
                  title="Simpan"
                  disable={!(dirty && isValid)}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
    </View>
  )
}