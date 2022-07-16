import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { COLORS } from '../../themes';
import {changePasswordSchema} from '../../plugins';
import { CustomHeader, CustomInput, CustomButton } from '../../components';
import { doChangePassword } from '../../store/actions';

function Hidden({onPress, name}) {
  return (
  <TouchableOpacity
    onPress={onPress}>
    <Icon
      name={name}
      size={24}
      color={COLORS.gray}
    />
  </TouchableOpacity>
  )
}

export default function Settings({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isSecureEntry1, setIsSecureEntry1] = useState(true);
  const [isSecureEntry2, setIsSecureEntry2] = useState(true);

  const dispatch = useDispatch();

  const onPressChange = ({current_password, new_password, confirm_password}) => {
    dispatch(doChangePassword(current_password, new_password, confirm_password, navigation));
  };

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
          onSubmit={values => onPressChange(values)}>
          {({handleChange, handleSubmit, values, errors, isValid, dirty}) => (
            <>
              <CustomInput
                testID="input-current_password"
                label="Current Password"
                name="current_password"
                secureTextEntry={isSecureEntry}
                onChangeText={handleChange('current_password')}
                value={values.current_password}
                error={errors.current_password}
                iconPosition="right"
                placeholder="Masukkan password saat ini"
                icon={
                  <Hidden 
                    onPress={() => {setIsSecureEntry(prev => !prev)}} 
                    name={isSecureEntry ? 'eye-off' : 'eye'} 
                  />
                }
              />
              <CustomInput
                testID="input-new_password"
                label="New Password"
                name="new_password"
                secureTextEntry={isSecureEntry}
                onChangeText={handleChange('new_password')}
                value={values.new_password}
                error={errors.new_password}
                iconPosition="right"
                placeholder="Masukkan password baru"
                icon={
                  <Hidden 
                    onPress={() => {setIsSecureEntry1(prev => !prev)}} 
                    name={isSecureEntry1 ? 'eye-off' : 'eye'} 
                  />
                }
              />
              <CustomInput
                testID="input-confirm_password"
                label="Confirm Password"
                name="confirm_password"
                secureTextEntry={isSecureEntry}
                onChangeText={handleChange('confirm_password')}
                value={values.confirm_password}
                error={errors.confirm_password}
                iconPosition="right"
                placeholder="Masukkan lagi password baru"
                icon={
                  <Hidden 
                    onPress={() => {setIsSecureEntry2(prev => !prev)}} 
                    name={isSecureEntry2 ? 'eye-off' : 'eye'} 
                  />
                }
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