import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import reduxLogger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['homeReducer', 'categoryReducer', 'commonReducers'],
};

const configPersist = persistReducer(persistConfig, Reducers);

export const Store = createStore(
  configPersist,
  applyMiddleware(ReduxThunk, reduxLogger),
);

export const Persistore = persistStore(Store);
