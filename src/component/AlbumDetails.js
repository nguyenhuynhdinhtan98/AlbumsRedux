import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  ThemeProvider,
  Card,
  Divider,
  Button,
  Image,
} from 'react-native-elements';
import api from '../api/axios';
const AlbumDetail = props => {
  console.log(props);
  return (
    <>
      <Card title={props.data.title}>
        <Image
          source={{
            uri: props.data.image,
          }}
          style={styles.imageStyle}
        />
        <Button
          title="Buy Now"
          buttonStyle={styles.buttonStyle}
          titleStyle={{color: '#2089DC'}}
        />
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 2,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#2089DC',
  },
  imageStyle: {width: null, height: 300, margin: 5, flex: 1},
});
export default AlbumDetail;
