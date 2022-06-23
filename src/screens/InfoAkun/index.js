import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {CustomHeader, CustomButton} from '../../components/atoms';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../themes';

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

function InputForm({title, keyboardType, placeholder, multiline, numberOfLines, maxLength}) {
  return (
    <View>
    <Text style={styles.textLabel}>{title}</Text>
        <TextInput 
          style={styles.action}
          placeholder={placeholder}
          placeholderTextColor={COLORS.lightGray1}
          keyboardType={keyboardType}
          autoCorrect={false}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
        />
   </View>   
  )
}

export default function InfoAkun({navigation}) {
  return (
    <View style={{height: "100%"}}>
      <CustomHeader 
        type="BackTitle" 
        title="Lengkapi Info Akun" 
        onPress={() => navigation.navigate("MainApp")} />
      <Upload />
      <View style={styles.menuWrapper}>
        <InputForm 
          title="Alamat*" 
          placeholder="Contoh: Jalan Daendles 55"
          multiline={true}
          numberOfLines={4}
        />
        <InputForm 
          title="No Handphone*" 
          placeholder="Contoh: 088980623792"
          keyboardType="numeric"
          numberOfLines={1}
          maxLength={13}
        />
    </View>
      <CustomButton primary title="Simpan" style={styles.button} />
    </View>
  );
}