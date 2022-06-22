import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/atoms/CustomHeader';
import styles from './styles';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomHeader type='BackTitle' onPress={() => navigation.navigate('')} />
      <View style={styles.masuk}>
        <Text style={styles.label}>Masuk</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.input} placeholder="Contoh: johndee@gmail.com" placeholderTextColor={'black'} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Masukkan password" placeholderTextColor={'black'} />
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.loginText}>Masuk</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.daftar}>
        <Text style={styles.text}>Belum punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.textButton}> Daftar di sini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
