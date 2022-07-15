import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Account, DaftarJual, FormDetail, Home, Notifikasi} from '../screens';
import {COLORS, FONTS} from '../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  const navigation = useNavigation();

  const {userData} = useSelector(state => state.loginReducer);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          ...FONTS.tabBarLabel,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      {userData.access_token && (
        <>
          <Tab.Screen
            name="Notifikasi"
            component={Notifikasi}
            options={{
              tabBarLabel: 'Notifikasi',
              tabBarBadge: 2,
              tabBarIcon: ({color, focused}) => (
                <Icon
                  name={focused ? 'notifications' : 'notifications-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Jual"
            component={FormDetail}
            listeners={{
              tabPress: (e) => {
                // Prevent default action
                e.preventDefault();
                // Any custom code here
                navigation.navigate('FormDetailScreen', { data: false });
              },
            }}
            options={{
              tabBarLabel: 'Jual',
              tabBarIcon: ({color, focused}) => (
                <Icon
                  name={focused ? 'add-circle' : 'add-circle-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Daftar Jual"
            component={DaftarJual}
            options={{
              tabBarLabel: 'Daftar Jual',
              tabBarIcon: ({color, focused}) => (
                <Icon
                  name={focused ? 'list-circle' : 'list-circle-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        </>
      )}
      <Tab.Screen
        name="Akun"
        component={Account}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
