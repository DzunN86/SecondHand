

import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { logoSplash } from '../../assets';
import {COLORS, FONTS, SIZES} from '../../themes';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <LottieView
        source={logoSplash}
        style={styles.logoImage}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
            navigation.replace('MainApp')
        }}
      />
      <Text style={styles.copyright}>Made with ❤️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    ...FONTS.body4,
    color: COLORS.lightGray,
    position: 'absolute',
    bottom: 19,
    letterSpacing: 7,
  },
  logoImage: {
    height: SIZES.height * 0.5,
    width: SIZES.width * 0.5,
    alignSelf: 'center',
  },
});