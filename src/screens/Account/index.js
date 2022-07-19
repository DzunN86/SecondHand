import {View, Text, Button, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {CustomHeader, Upload, Menu} from '../../components';
import {logoutUser, doGetProfile} from '../../store/actions';
import {showError, showSuccess} from '../../plugins';
import {version} from '../../../package.json';
import { useIsFocused } from '@react-navigation/native';

export default function Account({navigation}) {
  const dispatch = useDispatch();
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {userData} = useSelector(state => state.loginReducer);
  const isFocused = useIsFocused();

  const onPressLogout = () => {
    try {
      dispatch(logoutUser());
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      showSuccess('Logout Success');
    } catch (error) {
      showError(error);
    }
  };

  useEffect(() => {
    if (userData.access_token) {
      dispatch(doGetProfile());
    }
  }, [dispatch, isFocused]);

  return (
    <View>
      <CustomHeader
        type="HeaderTitle"
        title={
          userData.access_token
            ? userProfile.full_name || userData.name
            : 'Akun'
        }
      />
      {userData.access_token ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Upload
            source={userProfile.image_url}
            style={{
              alignSelf: 'center',
            }}
            disabled={true}
          />
          <View style={styles.menuWrapper}>
            <Menu
              name="account-edit"
              title="Ubah Akun"
              onPress={() => navigation.navigate('InfoAkunScreen')}
            />
            <Menu
              name="receipt"
              title="Order Saya"
              onPress={() => navigation.navigate('BuyerOrderScreen')}
            />
            <Menu
              name="bookmark"
              title="Wishlist"
              onPress={() => navigation.navigate('WishlistScreen')}
            />
            <Menu 
              name="account-cog" 
              title="Pengaturan Akun"
              onPress={() => navigation.navigate('SettingsScreen')} 
            />
            <Menu 
              name="logout" 
              title="Keluar" 
              onPress={onPressLogout} 
            />
          </View>
          <Text style={styles.version}> Version {version} </Text>
        </ScrollView>
      ) : (
        <View style={styles.doLogin}>
          <Button
            title="Masuk"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      )}
    </View>
  );
}
