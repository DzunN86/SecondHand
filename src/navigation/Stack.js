import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  DetailProduct,
  FormDetail,
  InfoAkun,
  InfoPenawaran,
  Login,
  Preview,
  Register,
  SearchProduct,
  Splash,
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
      <Stack.Screen name="InfoPenawaranScreen" component={InfoPenawaran} />
      <Stack.Screen name="PreviewScreen" component={Preview} />
      <Stack.Screen name="SearchProductScreen" component={SearchProduct} />
    </Stack.Navigator>
  );
}

export default Navigation;
