import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {CustomHeader, CustomInput, CustomButton} from '../../../components';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {doLogin} from '../../../store/actions/auth/loginUser';
import {loginSchema} from '../../../plugins';
import {Formik} from 'formik';
import {COLORS} from '../../../themes';
import Icon from 'react-native-vector-icons/Feather';

export default function Login({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.commonReducers);

  const onPressLogin = ({email, password}) => {
    dispatch(doLogin(email, password, navigation));
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
            initialValues={{email: '', password: ''}}
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
                <CustomButton
                  testID="btn-login"
                  loading={isLoading}
                  primary
                  title="Login"
                  disabled={!(dirty && isValid) || isLoading}
                  onPress={handleSubmit}
                />
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
