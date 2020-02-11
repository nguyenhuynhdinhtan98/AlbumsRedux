import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {connect, Provider} from 'react-redux';
import Login from './src/component/Login';
import List from './src/component/List';
import api from './src/api/firebase';
import reducer from './src/index';
import data from './src/redux/data';
class App extends React.Component {
  render() {
    return (
      <Provider store={reducer}>
        <List />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
