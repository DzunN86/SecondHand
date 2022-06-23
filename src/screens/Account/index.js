import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../components/atoms';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../themes';
import {version} from '../../../package.json'


function Menu({name, title, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.menuItem}>
          <Icon 
            name={name} 
            color={COLORS.primary} 
            size={25}/>
          <Text style={styles.menuItemText}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
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

export default function Account({navigation}) {
  return (
    <View>
      <CustomHeader 
        type="HeaderTitle" 
        title="Akun Saya" />
      <Upload />
      <View style={styles.menuWrapper}>
        <Menu 
          name="account-edit" 
          title="Ubah Akun" 
          onPress={() => navigation.navigate("InfoAkunScreen")} />
        <Menu 
          name="account-cog" 
          title="Pengaturan Akun" />
        <Menu 
          name="logout" 
          title="Keluar" />
      </View>
      <Text style={styles.version}> Version {version} </Text>
    </View>
  );
}
