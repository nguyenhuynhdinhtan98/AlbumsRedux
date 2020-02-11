import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
//import {Button, ThemeProvider, Text} from 'react-native-elements';
const Header = ({title}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.stylesText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 12,
  },
  stylesText: {
    fontSize: 25,
  },
});
export default Header;
