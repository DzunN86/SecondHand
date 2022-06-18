import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../components/atoms';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../themes';

function Menu({name, title}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.menuItem}>
          <Icon name={name} color={COLORS.primary} size={25}/>
          <Text style={styles.menuItemText}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} />
    </View>
  )
}

function Upload() {
  return (
    <TouchableOpacity               
      style={styles.container}>
        <Icon
          name="camera"
          size={35}
          color={COLORS.white}
          style={styles.icon}
        />
      </TouchableOpacity>
  )
}

export default function Account() {
  return (
    <View>
      <CustomHeader type="Title" title="Akun Saya" />
      <Upload />
      <View style={styles.menuWrapper}>
        <Menu name="account-edit" title="Ubah Akun" onPress={() => {}} />
        <Menu name="account-cog" title="Pengaturan Akun" />
        <Menu name="logout" title="Keluar" />
      </View>
    </View>
  );
}
