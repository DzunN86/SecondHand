import React, {useEffect} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MainLogo} from '../../assets';
import {COLORS, FONTS} from '../../themes';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  });
  return (
    <LinearGradient
      colors={['#1FD2FE', '#01B0DA', '#0198BD']}
      style={styles.container}>
      <Image source={MainLogo} style={styles.imgLogo} />
      <Text style={styles.logoText}>Second Hand</Text>
      <Text style={styles.copyright}>RN03 - Group 2 © 2022</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    width: 100,
    height: 100,
  },
  logoText: {
    ...FONTS.h1,
    color: COLORS.white,
    marginTop: 10,
  },
  copyright: {
    ...FONTS.body4,
    color: COLORS.grey7,
    position: 'absolute',
    bottom: 19,
  },
});
