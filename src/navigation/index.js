import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Login,
  Register,
  Splash,
  Dashboard,
  PokeBag,
  PokeDetail,
  Profile,
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
        name="DashboardScreen"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokeBagScreen"
        component={PokeBag}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokeDetailScreen"
        component={PokeDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
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
    </Stack.Navigator>
  );
}

export default Router;
