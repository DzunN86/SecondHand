import React from 'react';
import {Provider} from 'react-redux';
import CodePush from 'react-native-code-push';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './navigation';
import {Persistore, Store} from './store';
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'react-native';
import { COLORS } from './themes';

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    title: 'A new update is available!',
    appendReleaseDescription: true,
  },
};

const MainApp = () => {
  return (
    <>
      <StatusBar
      backgroundColor={COLORS.primary}
       barStyle="default" />
      <Navigation />
      <FlashMessage position="top" />
    </>
  );
};
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistore}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default CodePush(CodePushOptions)(App);
