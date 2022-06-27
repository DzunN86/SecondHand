import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../components/atoms';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../themes';
import {version} from '../../../package.json';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../store/actions/auth/logoutUser';
import {showError, showSuccess} from '../../plugins';

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

function Upload() {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="camera" size={35} color={COLORS.white} style={styles.icon} />
    </TouchableOpacity>
  );
}

export default function Account({navigation}) {
  const dispatch = useDispatch();
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
  return (
    <View>
      <CustomHeader
        type="HeaderTitle"
        title={userData.access_token ? userData.name : 'Akun'}
      />
      {userData.access_token ? (
        <>
          <Upload />
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
