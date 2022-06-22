import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import CustomHeader from '../../components/atoms/CustomHeader';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomHeader type='BackTitle' onPress={() => navigation.navigate('LoginScreen')} />
      <View style={styles.daftar}>
        <Text style={styles.label}>Daftar</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.input} placeholder="Nama Lengkap" placeholderTextColor={'black'} />
        <TextInput style={styles.input} placeholder="Contoh: johndee@gmail.com" placeholderTextColor={'black'} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Buat password" placeholderTextColor={'black'} />
      </View>
      <View style={styles.registerButton}>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.registerText}>Daftar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.masuk}>
        <Text style={styles.text}>Sudah punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.textButton}> Masuk di sini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
