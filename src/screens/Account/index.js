import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomHeader} from '../../components/atoms';
import styles from './styles';
import {COLORS} from '../../themes';
import {version} from '../../../package.json';
import {logoutUser} from '../../store/actions/auth/logoutUser';
import {showError, showSuccess} from '../../plugins';
import {doGetProfile} from '../../store/actions/akun';

function Menu({name, title, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.menuItem}>
          <Icon name={name} color={COLORS.primary} size={25} />
          <Text style={styles.menuItemText}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
}

function Upload({source, name, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}               
      style={styles.container}>
        <ImageBackground
          source={source}
          style={styles.container}
          imageStyle={{borderRadius: 15}}>
            <Icon
              name={name}
              size={35}
              color={COLORS.white}
              style={styles.icon}
            />
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default function Account({navigation}) {
  const dispatch = useDispatch();
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {userData} = useSelector(state => state.loginReducer);

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
  }, [dispatch]);

  return (
    <View>
      <CustomHeader
        type="HeaderTitle"
        title={userData.access_token ? userData.name : 'Akun'}
      />
      {userData.access_token ? (
        <>
          <Upload source={{uri: userProfile.image_url}} />
          <View style={styles.menuWrapper}>
            <Menu
              name="account-edit"
              title="Ubah Akun"
              onPress={() => navigation.navigate('InfoAkunScreen')}
            />
            <Menu name="account-cog" title="Pengaturan Akun" />
            <Menu name="logout" title="Keluar" onPress={onPressLogout} />
          </View>
          <Text style={styles.version}> Version {version} </Text>
        </>
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
