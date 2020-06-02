import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import {RootScreen} from './src/navigation'
import { store,persistor } from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
            <RootScreen />
        </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;