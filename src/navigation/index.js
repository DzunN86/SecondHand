import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLORS} from '../themes';
import Router from './Stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Router />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default Navigation;
