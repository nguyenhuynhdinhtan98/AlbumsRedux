import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AlbumList from './AlbumList';
export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({container: {flex: 1}});
