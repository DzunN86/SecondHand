import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { CustomHeader, CustomInput, CustomButton } from '../../../components';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../../store/actions/auth/loginUser';
import { loginSchema } from '../../../plugins';
import { Formik } from 'formik';
import { COLORS } from '../../../themes';
import Icon from 'react-native-vector-icons/Feather';
import TouchID from 'react-native-touch-id';
import Icons from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.commonReducers);
  const { isLogin, userData } = useSelector(state => state.loginReducer);

  const onPressLogin = ({ email, password }) => {

    dispatch(doLogin(email, password, navigation))
  };

  const onFingerPrint = () => {
    const optionalConfigObject = {
      title: 'Authentication Required', // Android
      imageColor: '#e00606', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };

    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        console.log(success)
        alert('Authenticated Successfully, Signed in with Fingerprint!');
      })
      .catch(error => {
        console.log(error)
        alert('Authentication Failed');
      });
  };
  return (
    <ScrollView contentContainerStyle={styles.scroll} testID="LoginScreen">
      <View style={styles.container}>
        <CustomHeader type="BackTitle" onPress={() => navigation.goBack()} />
        <View style={styles.masuk}>
          <Text style={styles.label}>Masuk</Text>
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
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
                  testID="input-email"
                  label="Email"
                  name="email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  error={touched.email && errors.email}
                  iconPosition="right"
                  placeholder="Enter Email"
                />
                <CustomInput
                  testID="input-password"
                  label="Password"
                  name="password"
                  iconPosition="right"
                  secureTextEntry={isSecureEntry}
                  placeholder="Enter Password"
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                  <CustomButton
                    style={{ width: userData.access_token ? "83%" : "100%" }}
                    testID="btn-login"
                    loading={isLoading}
                    primary
                    title="Login"
                    disabled={!(dirty && isValid) || isLoading}
                    onPress={handleSubmit}
                  />
                  {userData.access_token && (
                    <CustomButton
                      style={{ width: "15%" }}
                      primary
                      icon={<Icons name='finger-print' size={24} color='white' />}
                      onPress={onFingerPrint}
                    />
                  )}
                </View>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.daftar}>
          <Text style={styles.text}>Belum punya akun?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.textButton}> Daftar di sini</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
