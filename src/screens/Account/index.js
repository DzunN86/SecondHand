import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {version} from '../../../package.json';
import {NotLogin} from '../../assets';
import {CustomHeader, EmptyState, Menu, Upload} from '../../components';
import {showSuccess} from '../../plugins';
import {doGetProfile, logoutUser} from '../../store/actions';
import styles from './styles';

export default function Account({navigation}) {
  const dispatch = useDispatch();
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {userData, isLogin} = useSelector(state => state.loginReducer);
  const isFocused = useIsFocused();

  const onPressLogout = () => {
    Alert.alert('Konfirmasi', 'Apakah anda yakin ingin keluar?', [
      {text: 'Tidak', style: 'cancel'},
      {
        text: 'Ya',
        onPress: () => {
          dispatch(logoutUser());
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});

          showSuccess('Logout Success');
        },
      },
    ]);
  };

  useEffect(() => {
    if (userData.access_token) {
      dispatch(doGetProfile());
    }
  }, [dispatch, isFocused]);

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        type="HeaderTitle"
        title={isLogin ? userProfile.full_name || userData.name : 'Akun'}
      />
      {isLogin ? (
        <>
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
              name="history"
              title="History"
              onPress={() => navigation.navigate('HistoryScreen')}
            />
            <Menu
              name="account-cog"
              title="Pengaturan Akun"
              onPress={() => navigation.navigate('SettingsScreen')}
            />
            <Menu name="logout" title="Keluar" onPress={onPressLogout} />
          </View>
          <Text style={styles.version}> Version {version} </Text>
        </>
      ) : (
        <EmptyState
          image={NotLogin}
          title="Anda belum login"
          subTitle="Silahkan login terlebih dahulu"
          labelBtn={'Login'}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      )}
    </View>
  );
}
