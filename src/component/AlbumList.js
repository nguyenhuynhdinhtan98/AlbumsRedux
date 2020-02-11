import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import AlbumDetails from './AlbumDetails';
import api from '../api/axios';
import Header from './Header';
class AlbumList extends Component {
  state = {
    data: [],
  };
  getApi() {
    api.get(`music_albums`).then(res => {
      this.setState({data: res.data});
    });
  }
  componentDidMount() {
    this.getApi();
  }
  renderAlbums() {
    return this.state.data.map((item, index) => (
      <AlbumDetails key={index} data={item} />
    ));
  }
  render() {
    return (
      <>
        <Header title={'Albums'} />
        <ScrollView>{this.renderAlbums()}</ScrollView>
      </>
    );
  }
}

export default AlbumList;
