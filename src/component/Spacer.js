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
const Spacer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
export default Spacer;
