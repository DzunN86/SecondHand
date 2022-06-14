import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Login,
  Register,
  Account,
  DaftarJual,
  DetailProduct,
  FormDetail,
  Home,
  InfoAkun,
  InfoPenawaran,
  Notifikasi,
  Splash,
  Jual
} from '../screens';
import {COLORS} from '../themes';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal-inverted',
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotifikasiScreen"
        component={Notifikasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JualScreen"
        component={Jual}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountScreen"
        component={Account}
        options={{
          headerStyle: {
            backgroundColor: COLORS.secondary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="InfoAkunScreen"
        component={InfoAkun}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProductScreen"
        component={DetailProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FormDetailScreen"
        component={FormDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPenawaranScreen"
        component={InfoPenawaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DaftarJualScreen"
        component={DaftarJual}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
