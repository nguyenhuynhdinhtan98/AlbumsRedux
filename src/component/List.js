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
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'native-base';
import reducer from '../index';
import axios from 'axios';
class List extends Component {
  getItem = async () => {
    await axios
      .get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          Authorization:
            'Bearer DI_n2bvZiidzTiiwaHQnUWyPqLnFeIZD5Oi7sXF1AQcy1Xkmau9E5TnXnoBtlczU3p_lYdY6npF3rqdC9Pab3tGI08iyulL1BAOY0j9uk8oc9dJHr6yEQA2i7PUmXnYx',
        },
        params: {
          limit: 50,
          term: 'b',
          location: 'san jose',
        },
      })
      .then(item => {
        this.props.Adds(item.data.businesses);
      });
  };

  componentDidMount() {
    this.getItem();
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.state.countera}
          renderItem={({item}) => <Text>{item.id}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const mapStateToProps = state => {
  return {
    state: state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Adds: item =>
      dispatch({
        type: 'Add',
        item,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
