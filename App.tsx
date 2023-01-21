/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import PostOfficeList from './src/screens/postOfficeList/PostOfficeList';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PostOfficeList />
    </SafeAreaView>
  );
};

export default App;
