import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ButtonNavigatior} from '../components';
import React from 'react';
import {COLORS} from '../themes';
import {
  Account,
  DaftarJual,
  DetailProduct,
  FormDetail,
  Home,
  InfoAkun,
  InfoPenawaran,
  Jual,
  Login,
  Notifikasi,
  Register,
  Splash,
  Preview,
  SearchProduct,
  DetailProductSeller
} from '../screens';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }} tabBar={props => <ButtonNavigatior {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
      />
      <Tab.Screen
        name="Jual"
        component={FormDetail}
      />
      <Tab.Screen
        name="Daftar Jual"
        component={DaftarJual}
      />
      <Tab.Screen
        name="Akun"
        component={Account}
      />
    </Tab.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="MainApp"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted',
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="InfoAkunScreen" component={InfoAkun} />
        <Stack.Screen name="DetailProductScreen" component={DetailProduct} />
        <Stack.Screen name="FormDetailScreen" component={FormDetail} />
        <Stack.Screen name="InfoPenawaranScreen" component={InfoPenawaran} />
        <Stack.Screen name="PreviewScreen" component={Preview} />
        <Stack.Screen name="SearchProductScreen" component={SearchProduct} />
        <Stack.Screen name="DetailProductSeller" component={DetailProductSeller} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
