import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Card,
  CardSection,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, ThemeProvider} from 'react-native-elements';
import AlbumDetails from './AlbumDetails';
import api from '../api/axios';
import Header from './Header';
const InputComponent = ({placeholder, onChange, errorMessage}) => {
  return (
    <View style={styles.container}>
      <Input
        label={placeholder}
        placeholder={placeholder}
        onChangeText={onChange}
        errorStyle={{color: 'red'}}
        errorMessage={errorMessage}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textName: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});
export default InputComponent;
