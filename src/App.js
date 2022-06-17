import React from 'react';
import {Provider} from 'react-redux';
import CodePush from 'react-native-code-push';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './navigation';
import {Persistore, Store} from './store';

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    title: 'A new update is available!',
  },
};

const MainApp = () => {
  return (
      <Navigation />
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
