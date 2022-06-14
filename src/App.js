import {View, Text} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      </PersistGate>
    </Provider>
  );
};

export default App;
