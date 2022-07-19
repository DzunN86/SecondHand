import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  DetailProduct,
  DetailProductSeller,
  FormDetail,
  InfoAkun,
  InfoPenawaran,
  Login,
  Preview,
  Register,
  SearchProduct,
  Splash,
  TestingComponent,
  Settings,
  ChangePassword,
  Wishlist,
  BuyerOrder,
  DetailOrderBuyer,
  EditProduct,
  History,
} from '../screens';
import MainApp from './MainApp';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
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
      <Stack.Screen name="DetailProductSeller" component={DetailProductSeller} />
      <Stack.Screen name="InfoPenawaranScreen" component={InfoPenawaran} />
      <Stack.Screen name="PreviewScreen" component={Preview} />
      <Stack.Screen name="SearchProductScreen" component={SearchProduct} />
      <Stack.Screen name="TestingComponentScreen" component={TestingComponent} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePassword} />
      <Stack.Screen name="WishlistScreen" component={Wishlist} />
      <Stack.Screen name="BuyerOrderScreen" component={BuyerOrder} />
      <Stack.Screen name="DetailBuyerOrderScreen" component={DetailOrderBuyer} />
      <Stack.Screen name="EditProductScreen" component={EditProduct} />
      <Stack.Screen name="HistoryScreen" component={History} />
    </Stack.Navigator>
  );
}

export default Navigation;
