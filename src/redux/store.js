import  React,{ Component, createRef } from 'react';

import { PersistGate } from "redux-persist/integration/react";

import { Provider } from 'react-redux';

import { createStore,applyMiddleware,compose } from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer,persistCombineReducers } from 'redux-persist'
import {appReducer} from './combileReducer'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist:['restaurant']
}



  const persistedReducer = persistReducer(persistConfig, appReducer)


  const enhancer = compose(
    applyMiddleware(thunk)
  );
  let store = createStore(persistedReducer, {}, enhancer)
  let persistor = persistStore(store)
   
  export  { store, persistor }
