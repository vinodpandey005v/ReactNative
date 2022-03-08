/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, Text, View} from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';
import store from './src/store/store';
import {Provider} from 'react-redux';
import CheckNetworkConnection from './src/utils/CheckNetworkConnection';
import ErrorCard from './src/components/ErrorCard';


const App = () => {

  let network = CheckNetworkConnection();
  if (network === false) {
  return <ErrorCard />;
  }

  return (
    <Provider store={store}>
    <NavigationStack />
    </Provider>
  );
};


export default App;
