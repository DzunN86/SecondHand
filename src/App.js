import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Persistore, Store } from './store';
import { NavigationContainer } from '@react-navigation/native'
import Router from './navigation';

const MainApp = () => {
  const routeNameRef = useRef();
  const navigationRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        routeNameRef.current = currentRouteName;
      }}>
      <Router />
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistore}>
        <MainApp/>
      </PersistGate>
    </Provider>
  );
};

export default App;
